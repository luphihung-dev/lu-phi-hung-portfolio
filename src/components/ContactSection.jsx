import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const contacts = [
  {
    label: 'Email',
    value: 'hung.luph.dev@gmail.com',
    href: 'mailto:hung.luph.dev@gmail.com',
    icon: Mail
  },
  {
    label: 'GitHub',
    value: 'github.com/luphihung-dev',
    href: 'https://github.com/luphihung-dev',
    icon: Github
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/luphihung',
    href: 'https://www.linkedin.com/in/luphihung/',
    icon: Linkedin
  },
  {
    label: 'Resume',
    value: 'resume.pdf',
    href: '/resume.pdf',
    icon: FileText
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink px-4 py-16 text-paper sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Open to Intern Software Engineer roles</h2>
            <p className="mt-4 leading-7 text-paper/68">
              I am ready to contribute to Java, React, CRM, and Salesforce-oriented engineering work while continuing to
              learn from a strong product team.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="group border border-white/12 bg-white/[0.04] p-5 transition hover:border-mint/45 hover:bg-white/[0.07]"
              >
                <Icon className="text-mint" size={22} />
                <p className="mt-4 text-sm text-paper/52">{label}</p>
                <p className="mt-1 break-words font-medium text-paper">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
