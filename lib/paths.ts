const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/remnant-portfolio' : '');

export function assetPath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
