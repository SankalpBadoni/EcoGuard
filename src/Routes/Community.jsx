import React from 'react';
import { Play } from 'lucide-react';

const CommunityPage = () => {
  const videos = [
    {
      id: 1,
      title: "How to Reduce Air Pollution",
      duration: "4:30",
      views: "1.2k",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 2,
      title: "Water Conservation Tips",
      duration: "5:45",
      views: "980",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      id: 3,
      title: "Waste Management Best Practices",
      duration: "6:15",
      views: "750",
      thumbnail: "/api/placeholder/320/180"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Community Videos</h1>
      <div className="space-y-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Play className="text-white" size={48} />
              </div>
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;