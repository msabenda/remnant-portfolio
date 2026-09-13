import { notFound } from 'next/navigation'; export default async function Page({params}:{params:Promise<{slug:string}>}){await params;notFound()}
