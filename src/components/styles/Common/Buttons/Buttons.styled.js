import styled, { css } from "styled-components";
export const Button = styled.button`
  display:inline-block;
  background-color:${({ theme }) => theme.colors.main};
  color:white;
  border:1px solid ${({ theme }) => theme.colors.main};
  text-align:center;
  font-weight:600;
  min-width:100px;
  height:36px;
  line-height:34px;
  padding:0 8px;
  border-radius:8px;
  transition:0.5s ease all;
  text-decoration:none;
  &:hover{
    color:${({ theme }) => theme.colors.main};
    background-color:white;
  }

 /* outlined */
 ${props => props.outlined && css`
     background-color:white;
     color:${({ theme }) => theme.colors.main};
     &:hover{
       background-color:${({ theme }) => theme.colors.main};
       color:white
  }
 `}

 
 /* color - danger */
 ${props => props.danger && css`
     background-color:${({ theme }) => theme.colors.danger};
     border-color:${({ theme }) => theme.colors.danger};;
     &:hover{
       background-color:white;
        color:${({ theme }) => theme.colors.danger};;
     }
 `}

 ${props => props.small && css`
     height:28px;
     line-height:26px;
     font-size:14px;
     min-width:80px;
     font-size:14px;
     font-weight:500;
 `}
`

