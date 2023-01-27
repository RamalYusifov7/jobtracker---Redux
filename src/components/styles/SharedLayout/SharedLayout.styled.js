import styled from "styled-components";

export const SharedLayoutWrapper=styled.div`
   display:flex;
   .main-content{
      width: calc(100% - 270px);
      margin-left:auto;
      transition:0.5s ease all;
      &>.content-section{
         padding-top:36px;
      }
   }
   .main-content.fullscreen{
      width:100%;
   }
   @media (max-width:992px) {
        .main-content{
          width:100%;
   }
    }
`