import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../navigation/Navbar';
const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;
