import React from "react";

import { PartyHat } from "./PartyHatAnimated/PartyHat";

export const Header: React.FC = () => {
  return (
    <header className="mb-6 relative bg-page-start shadow-[0_0_10px_20px] shadow-page-start">
      {/* Колпак скейлится вместе с картинкой ниже размером 422 × 334 */}
      <PartyHat className="absolute left-[calc(115/422*100%)] top-[calc(-10/334*100%)] h-auto w-[calc(96/422*100%)]" />
      <img
        src={`${(import.meta as ImportMeta & { env: { BASE_URL: string } }).env.BASE_URL}header-text.svg`}
        alt="Варе 2 года!"
        width={422}
        height={334}
        decoding="async"
        fetchPriority="high"
        className="block h-auto w-full"
      />
    </header>
  );
};
