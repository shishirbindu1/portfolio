import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './component/Layout/Layout.jsx'
import Project from './component/Project/Project.jsx'
import Skills from './component/Skill/Skills.jsx'
import Contact from './component/Contact/Contact.jsx'
import Home from './component/Home/Home.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Portfolio from './component/Portfolio/Portfolio.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Portfolio/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
