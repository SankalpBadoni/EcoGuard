import React from 'react';
import { Camera, Trophy, Users, Award, Home, Upload } from 'lucide-react';

const NavigationBar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'upload', icon: Upload, label: 'Upload' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'achievements', icon: Award, label: 'Achievements' }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-green-600 text-white p-4">
      <div className="flex justify-around items-center">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`flex flex-col items-center ${
              currentPage === id ? 'text-white' : 'text-green-100'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;