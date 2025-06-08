import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/navbar/nav";
import SideMenu from "./components/main/sideMenu";
import AOS from "aos";

function App() {
  const [showSide, setShowSide] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      dir='rtl'
      className='text-black bg-slate-100 transition-colors duration-700 dark:text-white dark:bg-slate-800 min-h-[100vh]'>
      <Nav setShowSide={setShowSide} showSide={showSide} />
      <SideMenu show={showSide} setShowSide={setShowSide} />
      <main className=''>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
