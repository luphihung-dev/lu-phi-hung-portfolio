import { Activity, BarChart3, ExternalLink, Github, KeyRound, LockKeyhole, ShieldCheck, UsersRound } from 'lucide-react';

const highlights = [
  'JWT authentication',
  'Role-based access control: Admin, Manager, Sales',
  'Team/owner-based data visibility',
  'Customer directory, deal pipeline, task queue, activity timeline',
  'Dashboard analytics',
  'Backend automation inspired by Salesforce Flow/Apex Trigger concepts',
  'Responsive mobile UI',
  'Deployed with Netlify, Railway, Neon PostgreSQL'
];

const credentials = [
  ['Admin', 'admin@crm.local', 'Admin12345'],
  ['Manager', 'manager@crm.local', 'Manager12345'],
  ['Sales', 'sales@crm.local', 'Sales12345']
];

const metrics = [
  ['Auth', ShieldCheck],
  ['CRM Objects', UsersRound],
  ['Analytics', BarChart3],
  ['Automation', Activity]
];

export default function ProjectCard() {
  return (
    <article className="premium-card grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="border border-sage/30 bg-sage/10 px-3 py-1 text-sage">Featured project</span>
          <span>Salesforce-inspired full-stack CRM</span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-paper sm:text-3xl">SalesFlow CRM</h3>
        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          SalesFlow CRM is a Salesforce-inspired full-stack CRM project built with React and Spring Boot. It proves
          practical software engineering fundamentals while intentionally practicing CRM concepts that transfer well to
          Salesforce.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href="https://cedar-salesflow-crm.netlify.app">
            <ExternalLink size={18} />
            Live demo
          </a>
          <a className="btn-secondary" href="https://github.com/luphihung-dev/SalesFlow-CRM">
            <Github size={18} />
            GitHub repo
          </a>
          <span className="btn-secondary cursor-default opacity-80" title="Backend is deployed and protected by JWT authentication.">
            <LockKeyhole size={18} />
            Secured API
          </span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-sage" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <aside className="border-t border-white/[0.08] bg-white/[0.035] p-6 sm:p-8 lg:border-l lg:border-t-0">
        <div className="grid grid-cols-2 gap-3">
          {metrics.map(([label, Icon]) => (
            <div key={label} className="border border-white/[0.09] bg-white/[0.045] p-4">
              <Icon className="text-sage" size={22} />
              <p className="mt-3 text-sm font-semibold text-paper">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border border-white/[0.09] bg-white/[0.045] p-5">
          <div className="mb-4 flex items-center gap-2 text-paper">
            <KeyRound size={18} />
            <h4 className="font-semibold">Demo credentials</h4>
          </div>
          <div className="space-y-3">
            {credentials.map(([role, email, password]) => (
              <div key={role} className="border border-white/[0.08] bg-ink/40 p-3 text-sm">
                <p className="font-semibold text-paper">{role}</p>
                <p className="mt-1 break-all text-slate-400">{email}</p>
                <p className="break-all text-slate-400">{password}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </article>
  );
}
