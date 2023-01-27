import styled from "styled-components";

export const MenuListWrapper=styled.ul`
   list-style-type:none;
   padding:0;
   li{ 
     margin-top:16px;
    a{
    display:flex;
    align-items:center;
    padding:8px 8px 8px 0;
    font-size:20px;
    color:white;
    text-decoration:none;
    transition:0.5s ease all;
    &:hover{
        color:${({theme})=>theme.colors.main};
        transform:translateX(8px)
    }
    .icon{
        display:inline-block;
        margin-right:16px;
        margin-bottom:3px
    }
    svg{
        font-size:24px;
    }
   }}
`