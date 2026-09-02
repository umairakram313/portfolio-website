type SectionDividerProps = {
  index: string
  label: string
  className?: string
}

export default function SectionDivider({
  index,
  label,
  className = "mt-14",
}: SectionDividerProps) {
  return (
    <div className={`${className} flex items-center gap-4`} aria-hidden="true">
      <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-subtle">
        §{index}
      </span>
      <div className="flex-1 rule" />
      <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-subtle">
        {label}
      </span>
    </div>
  )
}
