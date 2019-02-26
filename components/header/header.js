import React, { useState } from 'react'
import SideDrawer from './navbar/side-drawer/side-drawer'
import HamburgerIcon from './navbar/hamburger-icon'
import Navbar from './navbar/navbar'
import styles from './header.scss'
import Logo from './logo/logo'

export default () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const closeDrawer = () => setSideDrawerOpen(false)
  return (
    <header>
      <style jsx>{styles}</style>
      {/*<Toolbar  />*/}
      <HamburgerIcon
        drawerClickHandler={() => setSideDrawerOpen(!sideDrawerOpen)}
      />
      <Logo />
      <Navbar />
      <SideDrawer onGoBackClick={() => closeDrawer()} show={sideDrawerOpen} />
      {sideDrawerOpen && (
        <div className='backdrop' onClick={() => closeDrawer()} />
      )}
    </header>
  )
}
