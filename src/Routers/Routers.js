import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Donations from '../Pages/Donation/Donations';
import Home from '../Pages/Home/Home';

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/donations',
                element: <Donations/>
            }
        ]
    }
])