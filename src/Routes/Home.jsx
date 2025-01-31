import React from "react";
import { Trophy, Camera, Clock, CheckCircle, XCircle, Wind } from "lucide-react";

const HomePage = () => {
  const userTokens = 120; // Dummy data

  const pendingReports = [
    {
      id: 1,
      image:
        "https://www.researchgate.net/publication/320220947/figure/fig1/AS:565819516375040@1511913293208/Examples-of-problems-in-rivers-a-Industrial-waste-and-sewage-in-Mississippi-River.png",
      description: "Industrial waste near river",
      status: "pending",
      submittedAt: "1 hour ago",
    },
    {
      id: 2,
      image:
        "https://www.sciencing.com/sciencing/factories-cause-air-pollution-5169/89169e5712ad48c18ca3e97171ee2ede.jpg",
      description: "Air pollution from factory",
      status: "reviewing",
      submittedAt: "3 hours ago",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "approved",
      description: "Garbage dump report",
      time: "2 hours ago",
      tokens: 30,
    },
    {
      id: 2,
      type: "rejected",
      description: "Noise pollution report",
      time: "1 day ago",
      reason: "Insufficient evidence",
    },
    {
      id: 3,
      type: "approved",
      description: "Water pollution report",
      time: "2 days ago",
      tokens: 30,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="text-yellow-500" size={20} />;
      case "reviewing":
        return <Clock className="text-blue-500" size={20} />;
      case "approved":
        return <CheckCircle className="text-green-600" size={20} />;
      case "rejected":
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Camera className="text-green-600" size={20} />;
    }
  };

  return (
    <div>
  
      <div className="bg-green-50 rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-green-800 mb-2">EcoGuard</h1>
        <p className="text-green-700">Join us in making our city cleaner and greener!</p>
        <div className="mt-4 bg-white rounded-lg p-4 shadow">
          <p className="text-lg font-semibold">Your Impact</p>
          <div className="flex items-center mt-2">
            <div className="bg-green-100 rounded-full p-3">
              <Trophy className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-green-600">{userTokens} tokens</p>
              <p className="text-sm text-gray-600">Keep reporting to earn more!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow mb-4">
        <h2 className="text-xl font-semibold mb-4">Reports Under Review</h2>
        {pendingReports.length > 0 ? (
          <div className="space-y-4">
            {pendingReports.map((report) => (
              <div key={report.id} className="flex items-start border-b pb-4">
                <img
                  src={report.image}
                  alt="Report"
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-4 flex-grow">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{report.description}</p>
                    <div className="flex items-center">
                      {getStatusIcon(report.status)}
                      <span className="text-sm ml-2 capitalize">
                        {report.status === "pending" ? "Pending Review" : "Under Review"}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{report.submittedAt}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-4">No reports under review</p>
        )}
      </div>

   
      <div className="bg-white rounded-lg p-4 shadow mb-4">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start border-b pb-4">
              <div className="bg-gray-100 rounded-full p-2">{getStatusIcon(activity.type)}</div>
              <div className="ml-3 flex-grow">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.description}</p>
                  {activity.type === "approved" && (
                    <span className="text-green-600 font-medium">+{activity.tokens} tokens</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-600">{activity.time}</p>
                  {activity.type === "rejected" && (
                    <p className="text-sm text-red-500">{activity.reason}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-6 shadow-lg flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Predict Your Area's AQI</h2>
          <p className="text-sm text-gray-200">
            Get real-time Air Quality Index (AQI) insights for your location.
          </p>
          <a
            href="https://ideathon-cbmumvdvsamwsoacjow36b.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Check AQI Now
          </a>
        </div>
        <Wind size={50} className="text-white opacity-90" />
      </div>
    </div>
  );
};

export default HomePage;
