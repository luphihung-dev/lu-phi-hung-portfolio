import { useEffect, useState } from 'react';
import { ArrowRight, Database, Github, Mail, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import ContactSection from './components/ContactSection.jsx';
import Hero3D from './components/Hero3D.jsx';
import Navbar from './components/Navbar.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import ScreenshotGrid from './components/ScreenshotGrid.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import SkillGroup from './components/SkillGroup.jsx';

const crmMap = [
  ['Customer', 'Account / Contact'],
  ['Deal', 'Opportunity'],
  ['Task', 'Salesforce Task'],
  ['Activity timeline', 'Activity History'],
  ['Backend automation events', 'Flow / Apex Trigger-style automation'],
  ['Approval flag', 'Approval Process concept'],
  ['RBAC roles', 'Profile / Role / Permission Set / Sharing concepts'],
  ['Dashboard analytics', 'Reports / Dashboards']
];

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST API', 'Spring Security', 'JPA/Hibernate', 'PostgreSQL']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI', 'Axios', 'Recharts']
  },
  {
    title: 'CRM / Salesforce Learning Direction',
    skills: [
      'Account / Contact / Opportunity concepts',
      'Workflow automation',
      'Apex Trigger concepts',
      'Role-based data access',
      'CRM reporting/dashboard thinking'
    ]
  },
  {
    title: 'Tools / Deployment',
    skills: ['Git / GitHub', 'Netlify', 'Railway', 'Neon PostgreSQL', 'Maven', 'npm']
  }
];

const heroProofs = [
  ['JWT Auth', ShieldCheck],
  ['RBAC', Workflow],
  ['PostgreSQL', Database]
];

const heroTitle = 'Intern Software Engineer Candidate';

export default function App() {
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      let index = 0;
      const interval = window.setInterval(() => {
        index += 1;
        setTypedTitle(heroTitle.slice(0, index));

        if (index >= heroTitle.length) {
          window.clearInterval(interval);
        }
      }, 58);
    }, 420);

    return () => {
      window.clearTimeout(startDelay);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-paper">
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#030712] text-paper">
          <div className="opacity-55">
            <Hero3D />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(125,184,218,0.24),transparent_28%),radial-gradient(circle_at_24%_42%,rgba(183,208,189,0.12),transparent_26%),linear-gradient(115deg,rgba(3,7,18,0.98),rgba(7,17,31,0.9)_46%,rgba(3,7,18,0.74))]" />
          <div className="absolute left-1/2 top-20 h-px w-[min(42rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-mint/25 to-transparent" />
          <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-4 pb-12 pt-24 sm:px-8 lg:grid-cols-[0.98fr_0.74fr]">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 border border-mint/20 bg-white/[0.045] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mint shadow-[0_16px_70px_rgba(0,0,0,0.18)] backdrop-blur-md sm:mb-6 sm:text-xs sm:tracking-[0.18em]">
                <Sparkles size={14} />
                <span className="truncate">CRM-focused full-stack portfolio</span>
              </div>
              <h1 className="font-display text-[3.35rem] font-semibold leading-[0.98] tracking-[-0.02em] text-paper min-[380px]:text-6xl sm:text-7xl lg:text-[5.35rem]">
                Lu Phi Hung
              </h1>
              <p
                className="typewriter mt-5 font-display text-[1.35rem] font-medium leading-snug text-paper/88 sm:mt-6 sm:text-[1.75rem]"
                aria-label={heroTitle}
              >
                <span>{typedTitle}</span>
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I build practical full-stack CRM systems with Java Spring Boot, React, PostgreSQL, and Salesforce-inspired
                workflow thinking.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-hero-primary" href="#project">
                  View SalesFlow CRM
                  <ArrowRight size={18} />
                </a>
                <a className="btn-hero-secondary" href="https://github.com/luphihung-dev">
                  <Github size={18} />
                  GitHub
                </a>
                <a className="btn-hero-secondary" href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {heroProofs.map(([label, Icon]) => (
                  <span key={label} className="hero-chip">
                    <Icon size={15} />
                    {label}
                  </span>
                ))}
                <span className="hero-chip">CRM Automation</span>
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-[300px] justify-center sm:max-w-[360px] lg:max-w-none lg:justify-end">
              <div className="relative h-[240px] w-[240px] min-[380px]:h-[270px] min-[380px]:w-[270px] sm:h-[320px] sm:w-[320px] lg:-mr-4 lg:h-[380px] lg:w-[380px] xl:-mr-8">
                <div className="absolute inset-[-34px] rounded-full bg-steel/15 blur-[80px]" />
                <div className="absolute inset-[-16px] rounded-full bg-mint/10 blur-3xl" />
                <div className="absolute inset-0 rounded-full border border-white/[0.12] bg-white/[0.045] shadow-[0_30px_110px_rgba(0,0,0,0.42)] backdrop-blur-md" />
                <div className="absolute inset-3 rounded-full border border-mint/20 bg-[#07111f]" />
                <img
                  src="/profile.png"
                  alt="Lu Phi Hung portrait"
                  className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-full object-cover object-[58%_36%] drop-shadow-[0_22px_52px_rgba(0,0,0,0.45)]"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_42px_rgba(3,7,18,0.62)]" />
              </div>
            </div>
          </div>
        </section>

        <section id="project" className="premium-section px-4 py-16 sm:px-8 sm:py-24">
          <div className="section-glow left-[-18rem] top-10 bg-mint/10" />
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader eyebrow="Featured Project" title="SalesFlow CRM">
                A Salesforce-inspired CRM that connects authentication, ownership-based data access, pipeline workflows,
                automation events, and analytics into one full-stack product.
              </SectionHeader>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <ProjectCard />
            </ScrollReveal>
          </div>
        </section>

        <section id="screenshots" className="premium-section px-4 py-16 sm:px-8 sm:py-24">
          <div className="section-glow right-[-20rem] top-0 bg-steel/12" />
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader eyebrow="Screenshots" title="Product views">
                Four responsive views from the CRM experience, designed to show day-to-day operational workflows clearly.
              </SectionHeader>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <ScreenshotGrid />
            </ScrollReveal>
          </div>
        </section>

        <section id="crm" className="premium-section px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader eyebrow="Why CRM / Salesforce" title="Traditional engineering, CRM-minded design">
                The project is built with React and Spring Boot to prove core software engineering fundamentals, while
                intentionally practicing CRM concepts that transfer well to Salesforce.
              </SectionHeader>
            </ScrollReveal>
            <div className="grid gap-3 md:grid-cols-2">
              {crmMap.map(([source, target], index) => (
                <ScrollReveal
                  key={source}
                  delay={index * 45}
                  className="grid gap-2 border border-white/[0.08] bg-white/[0.045] p-4 backdrop-blur-md transition hover:border-mint/25 hover:bg-white/[0.065] sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-0"
                >
                  <span className="font-medium text-paper">{source}</span>
                  <ArrowRight className="hidden text-sage sm:mx-3 sm:block" size={18} />
                  <span className="text-slate-300">{target}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="premium-section px-4 py-16 sm:px-8 sm:py-24">
          <div className="section-glow left-1/2 top-10 -translate-x-1/2 bg-violet-500/10" />
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader eyebrow="Skills" title="Practical full-stack toolkit" />
            </ScrollReveal>
            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <ScrollReveal key={group.title} delay={index * 90}>
                  <SkillGroup {...group} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="premium-section px-4 py-16 sm:px-8 sm:py-24">
          <ScrollReveal className="mx-auto max-w-4xl border-l-4 border-sage bg-white/[0.035] p-6 pl-7 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">About</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
              Building useful business software
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I am a software engineering learner focused on building practical full-stack applications. I enjoy turning
              business workflows into working software, especially CRM-style systems with clear roles, data ownership, and
              automation. I am currently looking for an Intern Software Engineer opportunity where I can grow in Java, web
              development, and Salesforce CRM technologies.
            </p>
          </ScrollReveal>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}
