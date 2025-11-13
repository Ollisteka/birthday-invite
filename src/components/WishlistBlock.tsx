import React from "react";

import { Card } from "./Card";

export const WishlistBlock: React.FC = () => {
  return (
    <Card>
      <div className="text-center">
        <h2 className="text-purple-700 text-xl font-bold mb-2">Подарки</h2>

        <p className="text-gray-700 text-sm mb-6">
          Не&nbsp;знаете, что подарить? Вдохновитесь нашим вишлистом. 
          Можно купить похожее где угодно&nbsp;&mdash; главное, не&nbsp;забывайте бронировать подарки!
        </p>

        <a
          href="https://ozon.ru/t/IFOyM8d"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-lg"
        >
          <span>Вишлист на Озоне</span>
          <span>✨</span>
        </a>
      </div>
    </Card>
  );
};
