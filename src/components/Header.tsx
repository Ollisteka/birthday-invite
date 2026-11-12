import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="mb-6">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div className="h-48 bg-linear-to-br from-header-start to-page-end relative overflow-hidden">
          <img
            src="feets.jpg"
            alt="Варины ножки"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0  bg-linear-to-t from-overlay/80 to-transparent p-4 backdrop-blur-xs">
          <h1 className="text-on-image/90 text-xl font-bold text-center">
            Приглашаем на День Рождения! 🧁
          </h1>
        </div>
      </div>
    </header>
  );
};
