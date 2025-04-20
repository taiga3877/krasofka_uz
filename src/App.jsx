import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/page';
import Footer from './Components/Footer/page';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
