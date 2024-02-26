import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './nav_bar/nav_bar'
import FooterComponents from './footer_bar/footer_component'

function RootLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <FooterComponents />
    </>
  )
}

export default RootLayout