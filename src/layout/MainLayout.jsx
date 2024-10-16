import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <nav>NabBar</nav>
            <Outlet></Outlet>
            <footer>footer</footer>
        </div>
    );
};

export default MainLayout;