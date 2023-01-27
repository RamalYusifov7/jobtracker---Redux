import React from 'react'
import { useSelector } from 'react-redux'
import LogoWhite from '../Logo/LogoWhite'
import MenuLits from '../MenuList/MenuLits'
import { MainSidebarWrapper } from '../styles/MainSidebar/MainSidebar.styled'

function MainSidebar() {
  const { isSidebarOpen }=useSelector(store=>store.sidebar)
  return (
    <MainSidebarWrapper className={isSidebarOpen ? "main-sidebar inactive":"main-sidebar"}>
       <LogoWhite/>
       <MenuLits/>
    </MainSidebarWrapper>
  )
}

export default MainSidebar