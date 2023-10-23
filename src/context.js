import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openCalculator = () => {
    setIsCalculatorOpen(true);
  };
  const closeCalculator = () => {
    setIsCalculatorOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isCalculatorOpen,
        openCalculator,
        closeCalculator,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
