import { createContext, useState } from "react";

export const Context = createContext();

export const MyContextProvider = ({ children }) => {
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [loggedIn,setLoggedIn] = useState(false);
    const [allorders,setAllOrders] = useState([]);
    const [profileDetails,setProfileDetails] = useState({"username":"arjun",
      "email":"ar885209@gmail.com",
      "password":"ar12ju34",
      "contact":"7350887544",
      "address":"wadgaon"
    })
    const [rightSec,setRIghtSec] = useState(false)

  return (
    <Context.Provider
      value={{sidebarOpen,setSidebarOpen,cart,setCart,total,setTotal,loggedIn,setLoggedIn,allorders,setAllOrders,profileDetails,setProfileDetails,rightSec,setRIghtSec}}
    >
      {children}
    </Context.Provider>
  );
};