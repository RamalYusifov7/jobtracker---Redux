import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  src: url("../../assets//fonts/Poppins");
  font-family: 'Poppins', sans-serif;
  font-weight:400;
}
*{
    box-sizing:border-box;
}
  body {
     margin:0;
     font-family: 'Work Sans', sans-serif;
  }
  .btn-unstyled{
    border:none;
    background-color:transparent;
  }
  .no-jobs-container{
    text-align:center;
    padding-bottom:24px;
  }
  .no-jobs{
    font-size:28px;
    margin-top:24px;
    margin-bottom:16px;
  }
  `