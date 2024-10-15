import Navbar from "./components/navbar"
import { Outlet } from "react-router-dom"
import React from "react";

export function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}