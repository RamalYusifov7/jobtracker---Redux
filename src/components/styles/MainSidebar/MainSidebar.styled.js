import styled from "styled-components";

export const MainSidebarWrapper=styled.aside`
  min-height:100vh;
  background-color:${({theme})=>theme.colors.primary};
  padding-left:32px;
  padding-top:18px;
  margin-left:0;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  width:270px;
  transition:all 0.5s ease ;
  .menu-list{
    padding-top:32px;
   
  }
  @media (max-width:992px) {
        display:none
    }
  &.inactive{
    transform:translateX(-100%);
    padding-left:0;
    z-index:-999;
    margin-left:-270px
  }

  
`