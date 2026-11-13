import { type ComponentProps, useId } from "react";

import "./PartyHat.css";

const paths = [
  {
    d: "M 24.2 13.2 C 29.7 21.5, 34.3 30.2, 37.8 39.5 C 28.5 40.4, 19.2 40.4, 10 39.3 C 13.8 30.1, 18.5 21.4, 24.2 13.2 Z",
    delay: "0s",
    duration: "0.67s",
  },
  {
    d: "M 23.4 8.6 C 24.5 8.3, 25.8 9, 26.3 10.2 C 26.7 11.2, 25.5 12.6, 24.5 13 C 23.3 13.2, 22 12.4, 21.7 11.3 C 21.6 10.2, 22.5 8.8, 23.6 8.6 Z",
    delay: "0.47s",
    duration: "0.15s",
  },
  {
    d: "M 22.9 26.3 C 23 25.5, 24 25, 24.6 25.5 C 25.5 26.2, 25 27.1, 24.3 27.3 C 23.4 27.8, 22.8 26.8, 23 25.9 Z",
    delay: "0.58s",
    duration: "0.15s",
  },
  {
    d: "M 22.9 33.8 C 23.1 33, 23.8 32.2, 24.7 32.9 C 25.6 33.2, 25 34.4, 24.3 34.8 C 23.6 35.1, 22.6 34.2, 23 33.4 Z",
    delay: "0.68s",
    duration: "0.15s",
  },
];

export const PartyHat = ({ className, ...props }: ComponentProps<"svg">) => {
  const filterId = `party-hat-boil-${useId()}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={96}
      height={96}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className={["party-hat", className].filter(Boolean).join(" ")}
      {...props}
    >
      <defs>
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.055"
            numOctaves={2}
            seed={1}
            result="noise"
          >
            <animate
              attributeName="seed"
              values="1;2;3;4;5;6"
              dur="0.86s"
              repeatCount="indefinite"
              calcMode="discrete"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={4}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g className="party-hat__drawing" filter={`url(#${filterId})`}>
        <rect width={48} height={48} fill="none" />
        {paths.map(({ d, delay, duration }) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            style={{ animationDelay: delay, animationDuration: duration }}
          />
        ))}
      </g>
    </svg>
  );
};
