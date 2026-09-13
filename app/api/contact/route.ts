import { NextRequest, NextResponse } from 'next/server'; import { contactSchema } from '@/lib/content';
export const runtime='nodejs';
const hits=new Map<string,{count:number;reset:number}>();
export async function POST(request:NextRequest){
 const type=request.headers.get('content-type')||''; if(!type.includes('application/json'))return NextResponse.json({error:'JSON required'},{status:415});
 const length=Number(request.headers.get('content-length')||0);if(length>10000)return NextResponse.json({error:'Payload too large'},{status:413});
 const origin=request.headers.get('origin');if(origin&&new URL(origin).host!==request.nextUrl.host)return NextResponse.json({error:'Origin rejected'},{status:403});
 const ip=request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'local';const now=Date.now();const hit=hits.get(ip);if(hit&&hit.reset>now&&hit.count>=5)return NextResponse.json({error:'Please try later'},{status:429});hits.set(ip,{count:hit&&hit.reset>now?hit.count+1:1,reset:hit&&hit.reset>now?hit.reset:now+60000});
 let input:unknown;try{input=await request.json()}catch{return NextResponse.json({error:'Invalid JSON'},{status:400})}const parsed=contactSchema.safeParse(input);if(!parsed.success)return NextResponse.json({error:'Please check the form fields'},{status:400});
 const endpoint=process.env.GOOGLE_APPS_SCRIPT_URL;if(!endpoint)return NextResponse.json({error:'Contact service is not configured'},{status:503});
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),8000);try{const upstream=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json','x-contact-secret':process.env.CONTACT_WEBHOOK_SECRET||''},body:JSON.stringify(parsed.data),signal:controller.signal,cache:'no-store'});if(!upstream.ok)throw new Error('upstream');return NextResponse.json({ok:true})}catch{return NextResponse.json({error:'Contact service unavailable'},{status:502})}finally{clearTimeout(timeout)}
}
