import { createContext, useState } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [loggedIn,setLoggedIn] = useState(false);
    const [allorders,setAllOrders] = useState([])

  return (
    <Context.Provider
      value={{sidebarOpen,setSidebarOpen,cart,setCart,total,setTotal,loggedIn,setLoggedIn,allorders,setAllOrders}}
    >
      {children}
    </Context.Provider>
  );
};