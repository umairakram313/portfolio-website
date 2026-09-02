import type { CSSProperties } from "react"

const portraitUrl = `${import.meta.env.BASE_URL}images/portrait-01.png`

export default function HeroPortrait() {
  const style = {
    "--portrait-scale": 0.97,
    "--portrait-x": "1%",
    "--portrait-y": "4%",
    "--portrait-rotation": "-0.35deg",
    "--portrait-mobile-scale": 0.95,
    "--portrait-mobile-x": "0%",
    "--portrait-mobile-y": "6%",
    "--portrait-mobile-rotation": "-0.2deg",
    "--active-paper-rotation": "-1.1deg",
    "--active-accent-offset": "2%",
  } as CSSProperties

  return (
    <figure className="hero-portrait" style={style}>
      <span
        className="hero-portrait-sheet hero-portrait-sheet-back"
        aria-hidden="true"
      />
      <span
        className="hero-portrait-sheet hero-portrait-sheet-accent"
        aria-hidden="true"
      />

      <div className="hero-portrait-artifact">
        <svg
          className="hero-portrait-frame"
          viewBox="0 0 520 620"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="portrait-torn-edge"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.075"
                numOctaves="3"
                seed="17"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="19"
                xChannelSelector="R"
                yChannelSelector="B"
              />
            </filter>
            <filter
              id="portrait-print-grain"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="2"
                seed="8"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <mask id="portrait-paper-mask" maskUnits="userSpaceOnUse">
              <rect
                x="32"
                y="28"
                width="456"
                height="564"
                fill="white"
                filter="url(#portrait-torn-edge)"
              />
            </mask>
          </defs>
          <g mask="url(#portrait-paper-mask)">
            <rect width="520" height="620" className="hero-portrait-paper" />
            <rect
              width="520"
              height="620"
              filter="url(#portrait-print-grain)"
              className="hero-portrait-grain"
            />
          </g>
        </svg>

        <div className="hero-portrait-stage">
          <img
            className="hero-portrait-cutout"
            src={portraitUrl}
            alt="Close-up portrait of Umair Akram smiling"
            decoding="async"
            draggable="false"
          />
        </div>

        <span
          className="hero-registration hero-registration-top"
          aria-hidden="true"
        />
        <span
          className="hero-registration hero-registration-bottom"
          aria-hidden="true"
        />
      </div>
    </figure>
  )
}
