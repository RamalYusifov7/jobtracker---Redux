import styled from "styled-components";

export const Input=styled.input`
  height:42px;
  border:1px solid ${({theme})=>theme.colors.main};
  padding-left:8px;
  border-radius:8px;
  &:focus{
    outline-color:${({theme})=>theme.colors.main}
  }
  width:100%;
  background-color:#f0f4f8;
`