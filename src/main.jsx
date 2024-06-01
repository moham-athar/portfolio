import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './Component/Body.jsx'
import Contact from './Component/Contact.jsx'
import Projects from './Component/Projects.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/project",
        element: <Projects />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router = {appRouter} />
)
