import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from './Pages/Landing/Landing';
import Header from './component/Shared/Header';
import Footer from './component/Shared/Footer';
import { GlobalStyles } from './Utils/theme/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Utils/theme/theme';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
//import Activate from './Pages/Dashbord/Activate';
import Dashboard from './Pages/Dashbord/Dashboard';
//import Profile from './Pages/Dashbord/Profile';
import Market from './Pages/Market.js/Market';

function App() {

  const [theme, setTheme] = useState('light');

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market" element={<Market />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
      
    </BrowserRouter>
  );
}

export default App;
