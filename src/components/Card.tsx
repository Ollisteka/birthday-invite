import React from "react";

import { cn } from "../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <section
      className={cn("bg-white rounded-2xl shadow-lg p-6 mb-6", className)}
    >
      {children}
    </section>
  );
};
