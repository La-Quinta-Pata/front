import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import File from '../pages/File'
import Contact from '../pages/Contact'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/catalogo' element={<Catalog />}/>
          <Route path='/archivo/:id' element={<File />}/>
          <Route path='/contacto' element={<Contact />}/>
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter