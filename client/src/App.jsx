

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import BlogTitles from './pages/BlogTitles'
import WriteArticle from './pages/WriteArticle'
import ReviewResume from './pages/ReviewResume'
import RemoveObject from './pages/RemoveObject'
import RemoveBackground from './pages/RemoveBackground'
import GenerateImages from './pages/GenerateImages'
import Community from './pages/Community'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster}from 'react-hot-toast'

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main App component.
 *
 * This component renders the main routes of the application, namely
 * the homepage, the dashboard, and various AI-related pages.
 *
 * The component also renders a Toaster component for displaying
 * toast notifications.
 */
/*******  ee1f6da8-8dd3-4361-a438-66093353faed  *******/const App = () => {

  //    const {getToken}=useAuth()
  // useEffect(()=>{
  //       getToken().then((token)=>console.log(token));
  // },[])

  
  return (
    <div>
      <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/ai" element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="blog-titles" element={<BlogTitles />} />
        <Route path="write-article" element={<WriteArticle />} />
        <Route path="review-resume" element={<ReviewResume />} />
        <Route path="remove-object" element={<RemoveObject />} />
        <Route path="remove-background" element={<RemoveBackground />} />
        <Route path="generate-images" element={<GenerateImages />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
    </div>
  )
}

export default App
