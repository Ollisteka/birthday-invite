import React from "react";

export const EventDetails: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🎂</div>
        <h2 className="text-pink-600 text-lg font-bold mb-2">
          Нашей малышке исполняется 1 годик! ❤️
        </h2>
        <p className="text-gray-700 text-sm">
          Мы будем рады видеть вас на нашем празднике!
        </p>
      </div>

      <hr className="border-gray-200 mb-6" />

      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-pink-500">📅</span>
          <span className="text-gray-700">20 декабря 2025 года</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-pink-500">🕐</span>
          <span className="text-gray-700">14:00</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-pink-500">📍</span>
          <span className="text-gray-700">У нас в гостях</span>
        </div>
      </div>

      <hr className="border-gray-200 mt-6" />

      <div className="text-center mt-6">
        <p className="text-gray-700 text-sm">
          Будем рады разделить с вами этот особенный день! ❤️
        </p>
      </div>
    </section>
  );
};
