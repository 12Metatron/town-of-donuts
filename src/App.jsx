import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Layout from './Layout';
import Roles from './pages/roles';
import React from "react";
import Rules from './pages/rules';
import Achievments from './pages/achievements';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/roles" element={<Roles/>}/>
                    <Route path="/rules" element={<Rules/>}/>
                    <Route path="/achievements" element={<Achievments/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App