import React from 'react';
import { Link } from 'react-router-dom'
import { MenuListWrapper } from '../styles/MenuList/MenuList'
import {FaBars, FaCodeBranch,FaUserEdit,FaRegPlusSquare} from "react-icons/fa"

function MenuLits() {
  return (
    <MenuListWrapper className='menu-list'>
        <li><Link to="/"><span className='icon'><FaCodeBranch/></span> All jobs</Link></li>
        <li><Link to="/add-job"><span className='icon'><FaRegPlusSquare/></span> Add job</Link></li>
        <li><Link to="/profile"><span className='icon'><FaUserEdit/></span>  Profile</Link></li>
    </MenuListWrapper>
  )
}

export default MenuLits