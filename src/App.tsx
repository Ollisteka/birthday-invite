import React from "react";
import { Header } from "./components/Header";
import { EventDetails } from "./components/EventDetails";
import { RSVPForm } from "./components/RSVPForm";

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-200">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Header />
        <EventDetails />

        {/* Decorative emojis */}
        <div className="flex justify-center space-x-4 mb-6">
          <span className="text-2xl">🎈</span>
          <span className="text-2xl">🎉</span>
          <span className="text-2xl">🎁</span>
          <span className="text-2xl">🧸</span>
          <span className="text-2xl">🎈</span>
        </div>

        <RSVPForm />
        <footer className="text-center text-gray-700 mt-8">
          <p className="text-sm">С любовью ждём вас на празднике! ❤️</p>
        </footer>
      </div>
    </main>
  );
};
