import React, { useState } from 'react';
import './App.css';
import LeftSidebar from './components/sidebar/LeftSideBar';
import RightSideBar from './components/sidebar/RightSideBar';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Typography } from '@mui/material';
import OrderList from './components/service/OrderList';

function App() {
  const [menuName, setMenuName] = useState("Default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <LeftSidebar isDarkMode={isDarkMode} setMenuName={setMenuName} />
      <div className="main-content">
        <Header menuName={menuName} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="content-area">
          <Typography style={{ marginLeft: menuName !== "Default" ? 3 : 20, fontWeight: 600, fontSize: 14, marginBottom: menuName !== "Default" && 10 }}>{menuName === "Default" ? "Order List" : menuName}</Typography>
          {menuName === "Default" ? <OrderList isDarkMode={isDarkMode} /> : <Main isDarkMode={isDarkMode} />}
        </div>
      </div>
      <RightSideBar isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
