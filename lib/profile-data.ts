import { assetPath } from './paths';
export type TimelineItem = {
  title: string;
  organization: string;
  date: string;
  description: string;
  href?: string;
  demo?: boolean;
};

export type GalleryItem = {
  src?: string;
  alt: string;
  title: string;
  context: string;
  group: 'Training and Events attended' | 'Tanzania Cybersecurity Community' | 'DIT–CEBOT Horizons Alliance' | 'DIT Cybersecurity Club' | 'Zone Labs at DIT' | 'TCRA Cyberchampions 2026' | 'Cyber Champions 2026';
  date?: string;
  href?: string;
  format?: 'wide' | 'standard' | 'square' | 'portrait';
  demo?: boolean;
};

// Replace or remove these demo entries when the real information is available.
export const awards: TimelineItem[] = [
  { title: '22nd nationally · TCRA Cyberchampions', organization: 'TCRA Cyberchampions', date: '2026', description: 'Recognized among the national Top 50 winners.' },
  { title: '3rd Place · Cyber Premium League', organization: 'Sanifu', date: '2026', description: 'Led Cyber Club DIT to third place nationally among 20 university teams.' },
  { title: 'Best Student Award', organization: 'Dar es Salaam Institute of Technology', date: '2024/2025', description: 'Recognized as the best student for the academic year.' },
  { title: '1st Winner · Artificial Intelligence Training (TOT)', organization: 'Data Safari', date: 'Add date', description: 'Earned first-place recognition during the Data Safari AI Training of Trainers programme.' },
];

export const events: TimelineItem[] = [
  { title: 'Founder & Community Lead', organization: 'APICon Tanzania', date: '2026 · In progress', description: 'Building APICon 2026 as a practical meeting point for developers, security practitioners, product teams, and technology leaders.' },
  { title: 'Ambassador', organization: 'Zone Labs at DIT', date: 'Present', description: 'Representing Zone Labs within the DIT community and connecting students with cybersecurity learning, practical opportunities, and industry engagement.' },
];

export const education: TimelineItem[] = [
  { title: 'Bachelor of Engineering · Computer Engineering & Cybersecurity', organization: 'Dar es Salaam Institute of Technology (DIT)', date: 'Expected October 2027', description: 'Best Student Award recipient for the 2024/2025 academic year.' },
];

export const certificates: TimelineItem[] = [
  { title: 'Certified API Red Team Analyst', organization: 'CyberWarFare Labs', date: 'Issued Apr 2026 · Expires Apr 2029', description: 'Professional certification in offensive API security assessment and red-team methodology.', href: 'https://labs.cyberwarfare.live/credential/achievement/69e99ab4fd9a4d31bda4ae84' },
  { title: 'API Security Certified Associate', organization: 'Wallarm', date: 'Issued Apr 2026 · Expires Apr 2029', description: 'API security certification covering discovery, common vulnerabilities, testing, and defensive practices.' },
  { title: 'API Penetration Testing', organization: 'APIsec University', date: 'Add issue date', description: 'Professional API penetration-testing training. Credential link to be added.' },
  { title: 'Artificial Intelligence Training', organization: 'Data Safari', date: 'Add issue date', description: 'Artificial intelligence training programme. Add the completion evidence.' },
  { title: 'H4K-IT Cybersecurity Bootcamp', organization: 'H4K-IT', date: '2025', description: 'Completed hands-on cybersecurity bootcamp training.' },
];

export const languages = [
  { name: 'Kiswahili', level: 'Native' },
  { name: 'English', level: 'C2 · Proficient' },
] as const;

export const keySkills = [
  'Developer Advocacy', 'Developer Experience (DX)', 'API Security', 'Agentic AI Security',
  'AI Security', 'API Integrations', 'Technical Documentation', 'Vulnerability Assessment', 'API Penetration Testing',
  'Secure API Design', 'Cybersecurity Strategy', 'Linux Server Hardening',
  'Windows Server Hardening', 'Web Application Security', 'Leadership',
  'Team Development', 'Communication', 'Teamwork',
] as const;

// Add real files to public/gallery, then set src to /gallery/your-file.jpg.
export const gallery: GalleryItem[] = [
  { src: assetPath('/gallery/cybersecurity-community-tanzania.webp'), alt: 'Msambili Ndaga engaging with cybersecurity professionals and community members in Tanzania', title: 'Tanzania Cybersecurity Community Zone CTF', context: 'Knowledge exchange · Professional community engagement', group: 'Tanzania Cybersecurity Community', format: 'wide' },
  { src: assetPath('/gallery/zone-labs-dit-ambassador.webp'), alt: 'Msambili Ndaga receiving a Zone Labs shirt while representing Zone Labs at Dar es Salaam Institute of Technology', title: 'CTF Zone Labs Ambassador at DIT', context: 'CTF advocacy · Student and industry engagement', group: 'Zone Labs at DIT', format: 'wide' },
  { src: assetPath('/gallery/data-safari-ai-wizards.webp'), alt: 'Msambili Ndaga receiving a certificate during Data Safari AI Wizards training', title: 'Data Safari for AI Wizards', context: 'Artificial intelligence training and recognition', group: 'Training and Events attended', format: 'portrait' },
  { src: assetPath('/gallery/google-devfest-1.webp'), alt: 'Msambili Ndaga attending Google DevFest 2026 with the developer community', title: 'Google DevFest 2026', context: 'Active community member · Connecting with developers', group: 'Training and Events attended', date: '2026' },
  { src: assetPath('/gallery/developer-training-session.webp'), alt: 'Msambili Ndaga teaching students during a technical training session', title: 'Teaching the next generation', context: 'Student training · Technical education', group: 'DIT Cybersecurity Club' },
  { src: assetPath('/gallery/dit-cybersecurity-summit-2026.webp'), alt: 'Msambili Ndaga hosting the DIT Cybersecurity Summit 2026', title: 'Hosting Cybersecurity Summit 2026', context: 'Event host · DIT Cybersecurity Club', group: 'DIT Cybersecurity Club', date: '2026' },
  { src: assetPath('/gallery/dit-cebot-horizons-alliance.webp'), alt: 'Msambili Ndaga with members of the DIT–CEBOT Horizons Alliance', title: 'Governance and institutional leadership', context: 'Governance Artifacts Fellow · Deputy Chief of Staff', group: 'DIT–CEBOT Horizons Alliance' },
  { src: assetPath('/gallery/dit-cyber-club-1.webp'), alt: 'Msambili Ndaga speaking at a DIT cybersecurity club event', title: 'Sharing practical security knowledge', context: 'Cybersecurity education', group: 'DIT Cybersecurity Club' },
  { src: assetPath('/gallery/dit-cyber-club-2.webp'), alt: 'Msambili Ndaga greeting a guest during a DIT cybersecurity club event', title: 'Connecting students with Industry Leaders', context: 'Community and mentorship', group: 'DIT Cybersecurity Club' },
  { src: assetPath('/gallery/dit-cyber-club-3.webp'), alt: 'DIT cybersecurity club members and guests in a group photograph', title: 'Connecting students with Cybersecurity Professionals', context: 'Leadership and collaboration', group: 'DIT Cybersecurity Club' },
  { src: assetPath('/gallery/tcra-cyberchampions-2026-1.webp'), alt: 'Msambili Ndaga receiving a Cyberchampions certificate at TCRA', title: 'TCRA Cyberchampions recognition', context: 'Certificate presentation', group: 'TCRA Cyberchampions 2026', date: '2026' },
  { src: assetPath('/gallery/tcra-cyberchampions-2026-2.webp'), alt: 'TCRA Cyberchampions participants and officials in a group photograph', title: 'TCRA Cyberchampions Final 2026', context: 'National cybersecurity programme', group: 'TCRA Cyberchampions 2026', date: '2026', format: 'square' },
  { src: assetPath('/gallery/cyber-champions-2026-1.webp'), alt: 'Cyber Champions 2026 award recipients on stage', title: 'Cyber Champions 2nd run awards', context: 'National recognition', group: 'Cyber Champions 2026', date: '2026', href: 'https://www.instagram.com/reel/DY9ewjPMqpk/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
  { src: assetPath('/gallery/cyber-champions-2026-2.webp'), alt: 'Cyber Champions 2026 team holding an award cheque on stage', title: 'Celebrating the team result (WARRIORS DIT)', context: 'Competition achievement', group: 'Cyber Champions 2026', date: '2026', href: 'https://www.instagram.com/p/DXBW8LMiAQC/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
];
