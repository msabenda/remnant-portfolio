const logos: Record<string, string> = {
  'Postman': 'postman',
  'Burp Suite': 'portswigger',
  'OWASP ZAP': 'zaproxy/00549E',
  'Swagger / OpenAPI': 'swagger',
  'GitHub': 'github/181717',
  'Git': 'git',
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'Python': 'python',
  'PHP': 'php',
  'Next.js': 'nextdotjs',
  'Docker': 'docker',
  'GitHub Actions': 'githubactions',
  'GitLab CI': 'gitlab',
  'Jenkins': 'jenkins',
};

export function ToolGrid({ tools }: { tools: readonly string[] }) {
  return <div className="brand-tool-grid">{tools.map(tool => <div className="brand-tool" key={tool}>
    <span className="brand-logo" aria-hidden="true">
      <b>{tool.slice(0, 2).toUpperCase()}</b>
      {logos[tool] && <img src={`https://cdn.simpleicons.org/${logos[tool]}`} alt="" loading="lazy"/>}
    </span>
    <span>{tool}</span>
  </div>)}</div>;
}
