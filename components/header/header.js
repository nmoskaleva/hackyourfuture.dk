import React, { useState } from 'react'
import SideDrawer from './side-drawer/side-drawer'
import HamburgerIcon from './navbar/hamburger-icon'
import Navbar from './navbar/navbar'
import styles from './header.scss'
import Logo from './logo/logo'

export default () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const closeDrawer = () => setSideDrawerOpen(false)
  return (
    <div>
      <style jsx>{styles}</style>
      {/*<Toolbar  />*/}
      <div className='toolbar'>
        <div className='navigation'>
          <HamburgerIcon
            drawerClickHandler={() => setSideDrawerOpen(!sideDrawerOpen)}
          />
          <Logo />
          <div className='spacer' />
          <Navbar />
        </div>
      </div>
      <SideDrawer onGoBackClick={() => closeDrawer()} show={sideDrawerOpen} />
      {sideDrawerOpen && (
        <div className='backdrop' onClick={() => closeDrawer()} />
      )}
    </div>
  )
}
