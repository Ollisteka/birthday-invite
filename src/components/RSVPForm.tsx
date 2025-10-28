import React from "react";

export const RSVPForm: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="text-center mb-6">
        <h2 className="text-pink-600 text-lg font-bold mb-2">
          Подтвердите присутствие
        </h2>
        <p className="text-gray-700 text-sm">
          Дайте нам знать, что вы придёте!
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="guestName"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Ваше имя
          </label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            placeholder="Введите ваше имя"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Подтвердить присутствие</span>
          <span>✓</span>
        </button>
      </form>
    </section>
  );
};
