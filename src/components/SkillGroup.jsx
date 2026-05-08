import {
  BarChart3,
  Cloud,
  Contact,
  Database,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Workflow
} from 'lucide-react';

const iconMap = {
  Java: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  'Spring Boot': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  PostgreSQL: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  React: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  Vite: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  'Tailwind CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  Axios: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg' },
  Git: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  'Git / GitHub': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  Maven: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  npm: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  Netlify: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
  Railway: { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg', invert: true },
  'REST API': { icon: Network },
  'Spring Security': { icon: ShieldCheck },
  'JPA/Hibernate': { icon: Layers3 },
  'Responsive UI': { icon: Contact },
  Recharts: { icon: BarChart3 },
  'Neon PostgreSQL': { icon: Database },
  'Account / Contact / Opportunity concepts': { icon: Contact },
  'Workflow automation': { icon: Workflow },
  'Apex Trigger concepts': { icon: KeyRound },
  'Role-based data access': { icon: LockKeyhole },
  'CRM reporting/dashboard thinking': { icon: BarChart3 },
  'Cloud deployment': { icon: Cloud },
};

function SkillIcon({ skill }) {
  const config = iconMap[skill] || { icon: Layers3 };
  if (config.src) {
    return (
      <img
        src={config.src}
        alt=""
        className={`h-8 w-8 object-contain ${config.invert ? 'brightness-0 invert' : ''}`}
        loading="lazy"
      />
    );
  }

  const Icon = config.icon;
  return <Icon className="text-mint" size={28} strokeWidth={1.8} />;
}

export default function SkillGroup({ title, skills }) {
  return (
    <article className="premium-card group p-5">
      <h3 className="font-display text-lg font-semibold text-paper">{title}</h3>
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="group/skill flex min-h-24 flex-col items-center justify-center gap-2.5 border border-white/[0.1] bg-white/[0.045] p-2.5 text-center transition duration-300 hover:-translate-y-1 hover:border-mint/35 hover:bg-white/[0.075] sm:min-h-28 sm:gap-3 sm:p-3"
            title={skill}
          >
            <span className="flex h-12 w-12 items-center justify-center border border-white/[0.08] bg-ink/35 transition group-hover/skill:border-mint/25">
              <SkillIcon skill={skill} />
            </span>
            <span className="text-xs font-medium leading-snug text-slate-300 sm:text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
