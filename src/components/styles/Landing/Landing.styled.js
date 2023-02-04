import styled from "styled-components";
export const LandingWrapper = styled.div`
   padding:16px 0;
   height:100vh;
   background-color:red;
   header{
      .container-fluid{
        display:flex;
        justify-content:space-between;
        align-items:center
      }
   }
   main {
    height:calc(100% - 150px);
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:80px;
    .row{
    align-items:center;
   }
   }
   .left-title{
    font-size:64px;
    font-weight:700;
    margin-bottom:24px;
    color:${({ theme }) => theme.colors.dark};
    span{
        color:${({ theme }) => theme.colors.main}
    }
   }
   .left-text{
    font-size:18px;
    line-height:30px;
    color:${({ theme }) => theme.colors.dark}
   }
   .landing-page-img{
       height:450px;
       img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
   }
   @media (min-width: 1599px){
        .landing-page-img{
            height:600px;
        }
    }
  @media (max-width: 1199px){
        .landing-page-img{
            height:370px;
        }
    }
  @media (max-width: 992px){
       main{
        padding-top:40px;
       }
       .left-title{
        font-size:48px;
       }
       .left-text{
        font-size:16px;
         line-height:28px;
       }
    }
  @media (max-width: 767px){
       main{
        height:auto;
       }
       main .row{
        flex-direction:column-reverse
       }
       .left-title{
        font-size:36px;
         margin-top:20px;
         margin-bottom:20px
       }
    }
  @media (max-width: 576px){
       .left-title{
        font-size:28px;
         margin-top:12px;
         margin-bottom:12px
       }
       .landing-page-img{
        height:300px;
       }
    }
`