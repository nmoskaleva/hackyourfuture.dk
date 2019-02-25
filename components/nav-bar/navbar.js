import React, { useState } from 'react'
import SideDrawer from './side-drawer/side-drawer'
import Toolbar from './toolbar/toolbar'
import styles from './navbar.scss'

export default () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const closeDrawer = () => setSideDrawerOpen(false)
  return (
    <div>
      <style jsx>{styles}</style>
      <Toolbar drawerClickHandler={() => setSideDrawerOpen(!sideDrawerOpen)} />
      <SideDrawer onGoBackClick={() => closeDrawer()} show={sideDrawerOpen} />
      {sideDrawerOpen && (
        <div className='backdrop' onClick={() => closeDrawer()} />
      )}
    </div>
  )
}
