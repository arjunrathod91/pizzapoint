import { createContext, useState } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
    const [sidebarOpen,setSidebarOpen] = useState(false)

  return (
    <Context.Provider
      value={{sidebarOpen,setSidebarOpen}}
    >
      {children}
    </Context.Provider>
  );
};