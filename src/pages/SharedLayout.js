import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import MainSidebar from '../components/MainSidebar/MainSidebar'
import MobileSidebar from '../components/MobileSidebar/MobileSidebar'
import { SharedLayoutWrapper } from '../components/styles/SharedLayout/SharedLayout.styled'

function SharedLayout() {
  const{isSidebarOpen}=useSelector(store=>store.sidebar)
  return (
    <SharedLayoutWrapper>
        <MainSidebar />
        <MobileSidebar/>
         <div className={ isSidebarOpen ?  "main-content fullscreen":"main-content"}>
              <Header/>
              <Outlet/>
         </div>
    </SharedLayoutWrapper>
  )
}

export default SharedLayout