import React from 'react';
import { Outlet } from 'react-router-dom';

const StyledLayout = () => {
    return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <Outlet />
    </div>
    );
};

export default StyledLayout;