import React, { useState } from 'react'
import { HeaderWrapper } from '../styles/Header/Header.styled'
import { Button } from '../styles/Common/Buttons/Buttons.styled';
import { FaBars, FaUserAlt, FaAngleDown } from "react-icons/fa"
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/User/userSlice';
import { toggleSidebar } from '../../features/Sidebar/sidebarSlice';
function Header() {
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const [showLogout, setShowLogout] = useState(false)
  return (
    <HeaderWrapper>
      <Container fluid>
        <div className="menu-btn-container">
          <button className='btn-unstyled desktop-menu-btn' onClick={() => dispatch(toggleSidebar())}><span className='icon'><FaBars /></span></button>
          <button className='btn-unstyled mobile-menu-btn' onClick={() => dispatch(toggleSidebar())}><span className='icon'><FaBars /></span></button>
        </div>
        <div className="header-left">
          <button className='profile-name' onClick={() => setShowLogout(!showLogout)}>
            <span className="profile-icon"><FaUserAlt /></span>
            {user.name}
            <span className="down-icon"><FaAngleDown /></span>
          </button>
          <Button onClick={() => dispatch(logoutUser())} className={showLogout ? "logout-btn show" : "logout-btn"} danger>Log out</Button>
        </div>
      </Container>
    </HeaderWrapper>
  )
}

export default Header