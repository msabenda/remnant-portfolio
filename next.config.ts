import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = isProduction || process.env.GITHUB_PAGES === 'true';
const repository = 'remnant-portfolio';
const basePath = isGitHubPages ? `/${repository}` : '';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: https://cdn.simpleicons.org; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" },
];

const redirects: NonNullable<NextConfig['redirects']> = async () => {
  const posts = ['breaking-down-api-vulnerabilities', 'prompt-injection-in-llms', 'data-poisoning-in-ai-models', 'zero-trust-api-architecture', 'devsecops-is-not-a-checkbox'];
  return [
    ...posts.map((slug, index) => ({ source: `/blog/post/${index + 1}`, destination: `/writing/${slug}`, permanent: true })),
    { source: '/blog', destination: '/writing', permanent: true },
    { source: '/work/:path*', destination: '/about', permanent: false },
    { source: '/research/:path*', destination: '/writing', permanent: false },
    { source: '/speaking', destination: '/about', permanent: false },
    { source: '/community', destination: '/about', permanent: false },
  ];
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isGitHubPages ? {
    output: 'export' as const,
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  } : {
    headers: async () => [{ source: '/(.*)', headers: securityHeaders }],
    redirects,
  }),
};

export default nextConfig;
