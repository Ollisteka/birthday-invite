import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="mb-6">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
          {/* Placeholder for baby feet image */}
          <div className="text-6xl">👶</div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
          <h1 className="text-white text-xl font-bold text-center">
            Приглашение на День Рождения! 🧁
          </h1>
        </div>
      </div>
    </header>
  );
};
