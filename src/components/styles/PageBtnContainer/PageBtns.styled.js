import styled from "styled-components";
export const PageBtnsWrapper=styled.div`
text-align:right;
 margin-top:24px;
 .page-btn{
   background-color:transparent;
   border:2px solid ${({theme})=>theme.colors.main};
   color:${({theme})=>theme.colors.main};
   width:32px;
   font-weight:500;
   &:not(:last-child){
    margin-right:6px
   }
   &.active{
     background-color:${({theme})=>theme.colors.main};
     color:white;
   }
 }
`