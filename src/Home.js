import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar , openCalculator } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openCalculator} className='btn'>
        Show Calculator
      </button>
    </main>
  );
};

export default Home;