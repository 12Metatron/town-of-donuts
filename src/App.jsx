import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Layout from './Layout';
import Roles from './pages/roles';
import React from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/roles" element={<Roles/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App