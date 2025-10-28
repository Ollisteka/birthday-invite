import React from "react";

const handleTelegramClick = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const telegramUrl = `https://t.me/olga_zhukova?text=${encodedMessage}`;
  window.open(telegramUrl, "_blank");
};

export const RSVPForm: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="text-center mb-6">
        <h2 className="text-pink-600 text-lg font-bold mb-2">
          Дайте нам знать, что вы придёте!
        </h2>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handleTelegramClick("Привет! Мы обязательно придём")}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Мы придём</span>
          <span>✓</span>
        </button>

        <button
          onClick={() =>
            handleTelegramClick(
              "Привет! Мы не сможем прийти в этот день, но сможем зайти в другой"
            )
          }
          className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Не сможем прийти</span>
          <span>✗</span>
        </button>
      </div>
    </section>
  );
};
