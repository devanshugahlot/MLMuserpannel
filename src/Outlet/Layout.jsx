import React from "react";
import ResponsiveDrawer from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return <>
        <ResponsiveDrawer outlet={ <Outlet/> } />
    </>;
};

export default Layout;
