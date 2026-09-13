import { assetPath } from './paths';
import { z } from 'zod';

export const profile = {
  name: 'Msambili Ndaga', handle: 'Msambili Ndaga', location: 'Dar es Salaam, Tanzania',
  headline: 'Helping developers build APIs and AI systems that are useful, scalable, and secure.',
  summary: 'Developer Advocate, API Security Specialist, Agentic AI Security researcher, and cybersecurity professional.',
  email: 'msabenda2@gmail.com',
  socials: [
    { label: 'GitHub', handle: '@msabenda', href: 'https://github.com/msabenda' },
    { label: 'LinkedIn', handle: '/in/msambili-ndaga', href: 'https://linkedin.com/in/msambili-ndaga' },
    { label: 'X', handle: '@msa2benda', href: 'https://twitter.com/msa2benda' },
    { label: 'Email', handle: 'msabenda2@gmail.com', href: 'mailto:msabenda2@gmail.com' },
  ],
} as const;

export const works = [
  { slug: 'apicon-tanzania', index: '01', type: 'Founder case study', title: 'APICon Tanzania', eyebrow: 'Ecosystem infrastructure', description: 'Building a platform for developers, security practitioners, product teams, and technology leaders to learn, connect, and shape Tanzania’s API ecosystem.', tags: ['Community', 'Developer advocacy', 'APIs'], status: 'Founder role confirmed · impact details pending' },
  { slug: 'api-security-practice', index: '02', type: 'Security practice', title: 'Testing the trust boundaries behind modern APIs', eyebrow: 'API security', description: 'A publication-safe view of an assessment practice grounded in authorization, business logic, identity, and the OWASP API Security Top 10.', tags: ['REST', 'GraphQL', 'OAuth 2.0'], status: 'Case-study evidence required' },
  { slug: 'agentic-ai-research', index: '03', type: 'Research direction', title: 'Constraining agents before capability becomes exposure', eyebrow: 'Agentic AI security', description: 'Researching prompt injection, unsafe tool use, excessive agency, memory poisoning, and authorization boundaries for AI agents.', tags: ['Agents', 'Tool boundaries', 'Prompt injection'], status: 'Research artifacts required' },
] as const;

export const articles = [
  { slug: 'breaking-down-api-vulnerabilities', title: 'Breaking Down API Vulnerabilities', date: '2026-01-12', category: 'API security', description: 'A practical field guide to common API weaknesses and defensive thinking.', image: assetPath('/assets/images/blog/api-vuln.jpg'), legacyId: 1 },
  { slug: 'prompt-injection-in-llms', title: 'Prompt Injection in LLMs', date: '2026-02-03', category: 'AI security', description: 'Understanding how instructions become attack surfaces in LLM-powered products.', image: assetPath('/assets/images/blog/prompt.png'), legacyId: 2 },
  { slug: 'data-poisoning-in-ai-models', title: 'Data Poisoning in AI Models', date: '2026-03-18', category: 'AI security', description: 'How compromised training data can alter model behavior and trust.', image: assetPath('/assets/images/blog/ai-poison.avif'), legacyId: 3 },
  { slug: 'zero-trust-api-architecture', title: 'Zero Trust API Architecture', date: '2026-04-19', category: 'Architecture', description: 'Identity, policy, transport, and telemetry for every API request.', image: assetPath('/assets/images/blog/zerotrust-api-cover.jpg'), legacyId: 4 },
  { slug: 'devsecops-is-not-a-checkbox', title: 'DevSecOps Is Not a Checkbox', date: '2026-06-15', category: 'DevSecOps', description: 'Embedding security into the software lifecycle without turning it into ceremony.', image: assetPath('/assets/images/blog/devsecops-cover.png'), legacyId: 5 },
  { slug: 'from-sdk-to-system-choosing-developer-tools', title: 'From SDK to System: Choosing Developer Tools That Fit', date: '2026-09-13', category: 'Developer experience', description: 'A practical guide to selecting SDKs, APIs, frameworks, and development tools for secure, maintainable systems.', image: assetPath('/assets/images/blog/sdk-developer-tools-system.svg'), legacyId: 6 },
] as const;

export const roles = [
  { organization: 'NEUROTECH AFRICA', role: 'Developer Advocate', detail: 'Supporting developers integrating Snippe and Ghala through technical guides, API integrations, workshops, and hands-on onboarding.' },
  { organization: 'APICon Tanzania', role: 'Founder & Community Lead', detail: 'Driving regional initiatives in API Security, DevSecOps, software engineering, and developer community growth.' },
  { organization: 'NICE Cyber Careers COI · NIST', role: 'Community Contributor', detail: 'Contributing to cybersecurity workforce conversations and advocating for the NICE Framework (NIST SP 800-181); formerly a NICE Career Ambassador.' },
  { organization: 'DIT – CEBOT Horizons Alliance', role: 'Deputy Chief of Staff · Governance Artifacts Fellow', detail: 'Helping shape governance artifacts, institutional standards, and organizational practice.' },
  { organization: 'Cyber Club DIT', role: 'President', detail: 'Mentoring aspiring cybersecurity talent through practical technical learning and community leadership.' },
  { organization: 'Zone Labs at DIT', role: 'Ambassador', detail: 'Representing Zone Labs within the DIT community and helping connect students with cybersecurity learning, practical opportunities, and industry engagement.' },
] as const;

export const credentials = [
  'Certified API Red Team Analyst (CARTA)',
  'API Security Certified Associate (ASCA)',
] as const;

export const expertise = [
  { code: 'AUTHZ', title: 'API Security', text: 'Authorization, business logic, REST, GraphQL, gateways, and the OWASP API Security Top 10.' },
  { code: 'IDENTITY', title: 'Platform Trust', text: 'OAuth 2.0, OpenID Connect, JWT, workload identity, threat modeling, and secure delivery.' },
  { code: 'AGENT', title: 'Agentic AI Security', text: 'Prompt injection, tool abuse, excessive agency, memory poisoning, and containment boundaries.' },
  { code: 'DX', title: 'Developer Advocacy', text: 'Documentation, workshops, technical education, developer feedback, and product understanding.' },
  { code: 'COMMUNITY', title: 'Ecosystem Building', text: 'APICon Tanzania, mentorship, events, partnerships, and access to practical API knowledge.' },
] as const;

export const featuredProjects = [
  { title: 'Ch3ck3r SAST', label: 'VS Code security extension', description: 'A local-first static application security testing tool with OWASP API Top 10 rules, OpenAPI analysis, SARIF reporting, and secure CI release evidence.', href: 'https://github.com/msabenda/ch3ck3r', tags: ['SAST', 'API Security', 'VS Code'] },
  { title: 'Reviewer', label: 'Secure code review training', description: 'An open-source training platform for identifying and remediating vulnerable web, API, AI, and MCP code through realistic review challenges.', href: 'https://github.com/msabenda/reviewer', tags: ['Secure Code Review', 'OWASP', 'AI Security'] },
  { title: 'Postman API Testing Framework', label: 'API testing and security lab', description: 'Postman and Newman automation with mock environments, CI reporting, and a localhost-only service for comparing secure and vulnerable API behavior.', href: 'https://github.com/msabenda/postman-api-testing-framework', tags: ['Postman', 'Newman', 'Security Testing'] },
  { title: 'API Finder Extension', label: 'Chrome extension', description: 'Passive API reconnaissance with endpoint discovery, request analysis, findings export, and a built-in request tester.', href: 'https://github.com/msabenda/api-finder', tags: ['Reconnaissance', 'Browser Extension', 'Open Source'] },
  { title: 'API Guardian Game', label: 'Interactive learning platform', description: 'A hands-on API security learning experience built around real-world attack scenarios and defensive decisions.', href: 'https://api-guardian-game.onrender.com/', tags: ['API Security', 'Education', 'Interactive'] },
] as const;

export const tools = [
  'Postman', 'Burp Suite', 'OWASP ZAP', 'Swagger / OpenAPI', 'GitHub', 'Git',
  'JavaScript', 'TypeScript', 'Python', 'PHP', 'Next.js', 'Docker',
  'GitHub Actions', 'GitLab CI', 'Jenkins',
] as const;

export const securityStack = [
  'OWASP API Security Top 10', 'REST API Security', 'GraphQL Security', 'OAuth 2.0',
  'OpenID Connect', 'JWT', 'API Threat Modeling', 'API Penetration Testing',
  'Secure API Design', 'API Documentation', 'DevSecOps',
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80), email: z.string().trim().email().max(160),
  organization: z.string().trim().max(120).optional().or(z.literal('')),
  intent: z.enum(['security', 'research', 'devrel', 'speaking', 'apicon', 'general']),
  message: z.string().trim().min(20).max(3000), website: z.string().max(0).optional(),
});
