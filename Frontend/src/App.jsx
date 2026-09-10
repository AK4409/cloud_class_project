import React from 'react'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Conditional from './components/Conditional'
import Navbar from './components/Navbar'
import Counter from './pages/Counter'
import ShoppingCart from './pages/ShoppingCart'
import Additem from './pages/Additem'
import Login from './pages/Login'
import Useeffect from './pages/Useeffect'
import Newpra from './pages/Newpra'
import CharCount from './pages/CharCount'
import About from './pages/About'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Footer from './pages/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/Conditional" element={<Conditional />} />
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Cart' element={<ShoppingCart/>}/>
        <Route path='/addProduct' element={<Additem/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/use' element={<Useeffect/>}/>
        <Route path='/pra' element={<Newpra/>}/>
        <Route path='/char' element={<CharCount/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/footer' element={<Footer/>}/>

      </Routes>
    </>
  );
}

export default App