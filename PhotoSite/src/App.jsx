import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Photoshoot from './pages/photoshoot/Photoshoot'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<Home/>} />
          <Route path='/photography' element = {<Photoshoot/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App