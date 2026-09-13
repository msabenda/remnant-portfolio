'use client';

import { useState } from 'react';

const modes = [
  {
    id: '01',
    label: 'API_SECURITY',
    command: 'inspect --boundary authorization',
    output: ['Map trust assumptions', 'Break business logic safely', 'Turn findings into fixes'],
  },
  {
    id: '02',
    label: 'AGENTIC_AI',
    command: 'contain --agent capabilities',
    output: ['Model tool permissions', 'Test prompt injection paths', 'Design enforceable limits'],
  },
  {
    id: '03',
    label: 'DEV_ADVOCACY',
    command: 'translate --complexity useful',
    output: ['Build developer education', 'Create practical documentation', 'Grow technical communities'],
  },
] as const;

export function SystemConsole() {
  const [active, setActive] = useState(0);
  const mode = modes[active];

  return <div className="system-console">
    <div className="console-bar">
      <span><i/> system.profile</span>
      <code>ONLINE</code>
    </div>
    <div className="console-tabs" role="tablist" aria-label="Areas of practice">
      {modes.map((item, index) => <button
        key={item.label}
        type="button"
        role="tab"
        aria-selected={active === index}
        onClick={() => setActive(index)}
      ><span>{item.id}</span>{item.label}</button>)}
    </div>
    <div className="console-screen" key={mode.label}>
      <p><span>remnant@portfolio:~$</span> {mode.command}<b className="console-cursor"/></p>
      <div className="console-output">
        <small>OUTPUT / {mode.label}</small>
        {mode.output.map((line, index) => <div key={line}><span>[0{index + 1}]</span>{line}</div>)}
      </div>
    </div>
    <div className="console-foot"><span>Dar es Salaam / TZ</span><span>select a module to inspect</span></div>
  </div>;
}
