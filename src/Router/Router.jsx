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
import NotFound from '../Pages/NotFound/NotFound'
import Profile from '../Pages/Profile/Profile'
import Playground from '../Pages/Playground/Playground'
import NewRule from '../Pages/NewRule/NewRule'
import ViewRule from '../Pages/ViewRule/ViewRule'
import NewProject from '../Pages/NewProject/NewProject'
import Reports from '../Pages/Reports/Reports'
export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
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
            path: '/profile',
            element: <Profile />
        },
        {
            path: '/playground',
            element: <Playground />
        },
        {
            path: '/new_rule',
            element: <NewRule />
        },
        {
            path: '/rule',
            element: <ViewRule />
        },
        {
            path: '/new_project',
            element: <NewProject />
        },
        {
            path: '/reports',
            element: <Reports />
        },
        {
            path: '/*',
            element: <NotFound />
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}
