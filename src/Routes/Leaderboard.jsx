import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardPage = () => {
  const leaderboardData = [
    { name: "Rahul S.", tokens: 450, rank: 1 },
    { name: "Priya M.", tokens: 380, rank: 2 },
    { name: "Amit K.", tokens: 310, rank: 3 },
    { name: "You", tokens: 300, rank: 4 },
    { name: "Sarah J.", tokens: 280, rank: 5 },
    { name: "Dev P.", tokens: 250, rank: 6 }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Local Heroes</h1>
      {leaderboardData.map((user) => (
        <div 
          key={user.rank} 
          className={`rounded-lg p-4 shadow mb-4 flex items-center 
            ${user.name === "You" ? "bg-green-200 border-2 border-green-600" : "bg-white"}`}
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Trophy className="text-green-600" size={24} />
          </div>
          <div className="ml-4 flex-grow">
            <p className={`font-semibold ${user.name === "You" ? "text-green-800 font-bold" : ""}`}>
              {user.name}
            </p>
            <p className="text-sm text-gray-600">{user.tokens} tokens</p>
          </div>
          <div className={`text-2xl font-bold ${user.name === "You" ? "text-green-800" : "text-green-600"}`}>
            #{user.rank}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardPage;
