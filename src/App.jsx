import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Routes/Layout'
import HomePage from './Routes/Home'
import UploadPage from './Routes/Upload.jsx'
import LeaderboardPage from './Routes/Leaderboard.jsx'
import CommunityPage from './Routes/Community.jsx'
import AchievementsPage from './Routes/Achievements.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/upload",
          element: <UploadPage/>
        },
        {
          path: "/leaderboard",
          element: <LeaderboardPage/>
        },
        {
          path: "/community",
          element: <CommunityPage/>
        },
        {
          path: "/achievements",
          element: <AchievementsPage/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
