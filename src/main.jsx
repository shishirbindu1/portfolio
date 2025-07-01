import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './component/Layout/Layout.jsx'
import Portfolio from './component/Portfolio/Portfolio.jsx'

import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Portfolio />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
