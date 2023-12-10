import React from 'react'
import {
    createBrowserRouter,
    RouterProvider    
} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/SignUp',
            element: <SignUp />
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}
