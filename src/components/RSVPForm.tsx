import React from "react";

import { Card } from "./Card";

const handleMaxClick = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const maxUrl = `https://max.ru/:share?text=${encodedMessage}`;
  window.open(maxUrl, "_blank");
};

export const RSVPForm: React.FC = () => {
  return (
    <Card className="text-center">
      <h2 className="text-accent text-lg font-bold  mb-2">
        Дайте нам знать, что вы придёте!
      </h2>
      <p className="text-body text-sm mb-6">
        Кликните на&nbsp;нужный вариант&nbsp;&mdash; откроется окошко
        в&nbsp;Максе. Выберите получателем Олю и&nbsp;отправьте сообщение.
      </p>
      <div className="space-y-3">
        <button
          onClick={() => handleMaxClick("Привет! Мы обязательно придём")}
          className="w-full bg-accent hover:bg-accent-hover text-on-accent font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Мы придём</span>
          <span>✓</span>
        </button>

        <button
          onClick={() =>
            handleMaxClick(
              "Привет! Мы не сможем прийти в этот день, но сможем зайти в другой"
            )
          }
          className="w-full bg-secondary hover:bg-secondary-hover text-on-secondary font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Не сможем прийти</span>
          <span>✗</span>
        </button>
      </div>
    </Card>
  );
};
