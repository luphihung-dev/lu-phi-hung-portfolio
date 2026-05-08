const navItems = [
  ['Project', '#project'],
  ['CRM Map', '#crm'],
  ['Skills', '#skills'],
  ['Contact', '#contact']
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/72 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center border border-mint/25 bg-white/[0.04] font-display text-xs font-bold text-paper shadow-[0_0_28px_rgba(183,208,189,0.08)] transition group-hover:border-mint/50">
            H
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-[0.02em] text-paper sm:inline">
            Lu Phi Hung
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-paper/62 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition duration-300 hover:text-paper">
              {label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center">
          <a className="resume-link inline-flex" href="/resume.pdf">
            View CV
          </a>
        </div>
      </nav>
    </header>
  );
}
