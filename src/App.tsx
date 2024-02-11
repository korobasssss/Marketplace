import React from 'react';
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Products from "./components/home/Products";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />}/>
                    <Route path={'/home'} element={<Products/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
