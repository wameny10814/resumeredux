import React from 'react';
import { Outlet } from 'react-router-dom';

const StyledLayout = () => {
    return (
    <div style={{ marginLeft: '0%', marginRight: '0%' }}>
        <Outlet />
    </div>
    );
};

export default StyledLayout;