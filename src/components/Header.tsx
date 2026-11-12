import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="mb-6">
      <img
        src={`${(import.meta as ImportMeta & { env: { BASE_URL: string } }).env.BASE_URL}header-text.svg`}
        alt="Варе 2 года!"
        width={422}
        height={336}
        decoding="async"
        fetchPriority="high"
        className="block h-auto w-full"
      />
    </header>
  );
};
