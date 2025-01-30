import { Link, Outlet, useLocation } from 'react-router-dom';
import { Camera, Trophy, Users, Award, Home, Upload } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/upload', icon: Upload, label: 'Upload' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/achievements', icon: Award, label: 'Achievements' }
  ];

  return (
    <div className="pb-20 min-h-screen bg-gray-50">
      <Outlet />
      <nav className="fixed bottom-0 w-full bg-green-600 text-white p-4">
        <div className="flex justify-around items-center">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center ${
                location.pathname === path ? 'text-white' : 'text-green-100'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;