import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Outlet from './pages/Outlet/Outlet'
import Menu from './pages/Menu/Menu'
import Offers from './pages/Offers/Offers'
import Footer from './components/Footer/Footer'
import Admin from './pages/Admin/Admin'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/outlet' element={<Outlet/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

