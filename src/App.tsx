import React from "react";

import { EventDetails } from "./components/EventDetails";
import { Header } from "./components/Header";
import { RSVPForm } from "./components/RSVPForm";
import { WishlistBlock } from "./components/WishlistBlock";

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-page-start to-page-end">
      <div className="container mx-auto px-4 py-4 max-w-md">
        <Header />
        <EventDetails />
        <WishlistBlock />
        <RSVPForm />
        <footer className="text-center text-on-accent mt-8 mb-8">
          <p className="text-sm">Ждём вас! ❤️</p>
        </footer>
      </div>
    </main>
  );
};
