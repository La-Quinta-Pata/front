import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Collaboration from '../components/sections/Collaboration'
import {collaboration} from "../data/collaborationData"

function Layout() {
  return (
    <section>
      <Header />
      <main>
          <Outlet />
      </main>
      <Collaboration collaboration={collaboration}/>
      <Footer />
    </section>
  )
}

export default Layout