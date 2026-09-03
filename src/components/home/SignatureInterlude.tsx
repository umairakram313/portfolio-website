import { SIGNATURE_STATEMENT } from "../../content"
import SectionDivider from "../SectionDivider"

export default function SignatureInterlude() {
  const { lead, connective, anchor, supporting } = SIGNATURE_STATEMENT

  return (
    <section
      className="signature-interlude"
      aria-labelledby="signature-heading"
    >
      <div className="signature-interlude-inner">
        <svg
          className="signature-trajectory"
          viewBox="0 0 720 150"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <g className="signature-trajectory-order">
            <path d="M18 30 H700" />
            <path d="M18 52 H700" />
            <path d="M18 74 H700" />
            <path d="M18 96 H700" />
            <path d="M18 118 H700" />
          </g>
          <path
            className="signature-trajectory-bet"
            d="M18 96 C190 96 222 94 306 72 C402 47 466 18 700 18"
          />
        </svg>

        <div className="signature-rule" aria-hidden="true" />
        <h2 id="signature-heading" className="signature-statement">
          <span className="signature-bet">{lead}</span>
          <span className="signature-connective">{connective}</span>
          <span className="signature-consensus">{anchor}</span>
        </h2>
        <p className="signature-supporting">{supporting}</p>
      </div>

      <div className="signature-divider">
        <SectionDivider index="005" label="Contact" />
      </div>
    </section>
  )
}
