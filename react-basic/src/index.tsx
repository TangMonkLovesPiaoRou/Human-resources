import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import './index.scss'
import App from './App.tsx'
createRoot(document.getElementById('root')).render(<BrowserRouter><React.StrictMode><App /></React.StrictMode></BrowserRouter>)