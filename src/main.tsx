import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import './styles/global.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { Post } from './components/Post';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/posts' element={<Post />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
