import React from 'react';
import { Award } from 'lucide-react';

const AchievementsPage = () => {
  const achievements = [
    {
      id: 1,
      title: "Electric Vehicle Policy",
      description: "Government announces new incentives for electric vehicle adoption",
      date: "Last week",
      icon: "🚗"
    },
    {
      id: 2,
      title: "Green Building Initiative",
      description: "New regulations for sustainable construction practices",
      date: "2 weeks ago",
      icon: "🏢"
    },
    {
      id: 3,
      title: "Solar Power Program",
      description: "Residential solar panel installation subsidies announced",
      date: "3 weeks ago",
      icon: "☀️"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Government Initiatives</h1>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-3">{achievement.icon}</div>
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;