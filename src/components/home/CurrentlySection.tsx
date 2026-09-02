import { CURRENTS } from "../../content"
import SectionDivider from "../SectionDivider"

export default function CurrentlySection() {
  return (
    <section className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-foreground">
            Currently
          </h2>
          <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground mt-3">
            What's on the desk
          </p>
        </div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {CURRENTS.map((current) => (
              <div
                key={current.label}
                className="py-5 border-t border-border pr-8"
              >
                <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-accent mb-1">
                  {current.label}
                </p>
                <p className="font-display font-light text-[15px] text-secondary-foreground italic">
                  {current.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t-2 border-accent pt-6 max-w-[540px]">
            <p className="font-display font-light italic text-[20px] md:text-[24px] leading-[1.4] text-foreground">
              "The best systems are built by people who understand both the
              equations and the material."
            </p>
            <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-muted-foreground mt-4">
              — On engineering intuition
            </p>
          </div>
        </div>
      </div>
      <SectionDivider index="005" label="Contact" />
    </section>
  )
}
