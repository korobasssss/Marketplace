import React from 'react';
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {ProductsContainer} from "./components/home/ProductsContainer";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" replace />}/>
                    <Route path={'/products'} element={<ProductsContainer/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
