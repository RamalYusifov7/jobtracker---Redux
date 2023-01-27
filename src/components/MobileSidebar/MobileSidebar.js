import React, { useRef } from 'react'
import { MobileSidebarWrapper } from '../styles/MobileSidebar/MobileSidebar.styled'
import Logo from "../../components/Logo/LogoWhite"
import MenuLits from '../MenuList/MenuLits'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../features/Sidebar/sidebarSlice'
import { FaTimes } from 'react-icons/fa'
function MobileSidebar() {
  const { isSidebarOpen } = useSelector(store=>store.sidebar);
  const dispatch=useDispatch()

  const mobilesSidebar=useRef()
  const anchors=document.querySelectorAll(".mobile-sidebar-content .menu-list a")
  anchors.forEach(item=>{
    item.onclick=function(){
      mobilesSidebar.current.classList.remove("active")
    }
  })
  return (
    <MobileSidebarWrapper ref={mobilesSidebar} className={isSidebarOpen ? "mobile-sidebar active" : "mobile-sidebar"}>
         <div className='wrapper'>
            <div className="mobile-sidebar-content">
                <Logo/>
                <MenuLits/>
            </div>
            <button onClick={()=>dispatch(toggleSidebar())} className='close-btn btn-unstyled'><FaTimes/></button>
          </div>
     </MobileSidebarWrapper>
  )
}

export default MobileSidebar