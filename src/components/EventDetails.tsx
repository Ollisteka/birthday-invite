import React from "react";

import { Card } from "./Card";

export const EventDetails: React.FC = () => {
  return (
    <Card>
      <div className="text-center mb-6">
        <h2 className="text-accent text-lg font-bold">
          Мы будем рады видеть вас на&nbsp;празднике!
        </h2>
      </div>
      <div className="space-y-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-accent">📅</span>
          <span className="text-body">19 декабря 2026 года</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-accent">🕐</span>
          <span className="text-body">16:00</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-accent">📍</span>
          <span className="text-body">У нас в гостях</span>
        </div>
      </div>
    </Card>
  );
};
