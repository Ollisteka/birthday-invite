import React from "react";

import { Card } from "./Card";

export const WishlistBlock: React.FC = () => {
  return (
    <Card>
      <div className="text-center">
        <h2 className="text-accent text-xl font-bold mb-2">Подарки</h2>

        <p className="text-body text-sm mb-6">
          Не&nbsp;знаете, что подарить? Вдохновитесь нашим вишлистом. Можно
          купить похожее где угодно&nbsp;&mdash; главное, не&nbsp;забывайте
          бронировать подарки!
        </p>

        <a
          href="https://followish.io/app/wishlists/jhnejpzhqrqv6t"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-linear-to-r from-wishlist-start to-accent hover:from-wishlist-start-hover hover:to-accent-hover text-on-accent font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-lg"
        >
          <span>Список желаний</span>
          <span>✨</span>
        </a>
      </div>
    </Card>
  );
};
