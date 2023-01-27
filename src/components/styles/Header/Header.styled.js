import styled from "styled-components";

export const HeaderWrapper=styled.header`
 padding-top:20px;
 padding-bottom:16px;
 background-color:white;
 &>.container-fluid{
  display:flex;
  align-items:center;
  justify-content:space-between;
 }
 .icon svg{
    font-size:20px;
 }  
 .header-left{
   position: relative;
 }
 .mobile-menu-btn{
   display:none
 }
.profile-name{
    border:none;
    display:flex;
    align-items:center;
    color:white;
    background-color:${({theme})=>theme.colors.secondary};
    border-radius:8px;
    padding:4px 12px;
   .profile-icon{
      margin-right:6px;
      margin-bottom:3px;
      }
   .down-icon{
      margin-left:6px;
      margin-bottom:2px;
      font-size:18px;
   }
   }

   .logout-btn{
      display:none;
   }
   .logout-btn.show{
      display:block;
      position:absolute;
      bottom:-46px;
      right:8px;
   }
   @media (max-width:992px){
     .mobile-menu-btn{
     display:block
    }
    .desktop-menu-btn{
      display:none
    }
 }
`