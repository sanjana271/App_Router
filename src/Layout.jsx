//here we want same header and footer for all other components like home about contact
//whatever layout im creating , you have to mention that in index file
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";//we want others like home , contact to be dynamic so we outlet

function Layout() {
    return (
        <>{/*as header and footer will be same but we want others like home to be dynamic so we outlet */}
            <Header />
            {/*in this if i write outlet then uske upper and niche ke components will be same and jispe outlet likho that can be changed */}
            {/*header and footer will be same and everything written inside can be changed */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout