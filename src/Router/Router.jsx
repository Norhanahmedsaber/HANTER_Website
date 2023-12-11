import React from 'react'
import {
    createBrowserRouter,
    RouterProvider    
} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import Home from '../Pages/Home/Home'
import Parent from '../playground/Parent'
export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Parent />,
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/home',
            element: <Home />
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}
