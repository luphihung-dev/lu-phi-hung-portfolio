export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sage">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.01em] text-paper sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-300">{children}</p> : null}
    </div>
  );
}
