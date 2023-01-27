import styled from "styled-components";

export const JobContainerWrapper = styled.section`
  padding-top:80px;
  .job-found{
    margin-bottom:16px;
  }
 .single-job{
  background-color:white;
  padding:20px;
  margin-bottom:24px;
  border-radius:8px;
  transition:0.5s ease all;
  box-shadow:${({ theme }) => theme.shadows.shadow1};
  &:hover{
    box-shadow: 1px 22px 69px -33px rgba(0,0,0,0.65);
 ;}
  .header{
     display:flex;
     align-items:center;
     .header-content{
        width:calc(100% - 40px);
        .company{
           font-size:14px;
           margin:0;
           text-transform:capitalize;
        }
        .position{
           font-size:18px;
            font-weight:700;
            margin-top:8px;
            text-transform:capitalize;
        }
        
         .position,.job-location,.company{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
         -webkit-line-clamp: 1; // put the number of lines
         -webkit-box-orient: vertical;
          } 
     }
  }
  .company-logo{
    width:50px;
    height:50px;
    border-radius:4px;
    background-color:#3b82f6;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .job-location{
          text-transform:capitalize
        }

  .job-content{
      .col>div{
        margin-bottom:12px
      }
       margin-top:24px;
       .job-type{
            text-transform:capitalize
        }
  }
  .status{
    text-align:center;
    border-radius:4px;
    color:#f5f5f5;
    font-size:16px;
    max-width:160px;
    margin:auto;
  }
  .job-time{
    text-align:center;
  }
  .pending{
    color:#fca959;
    background-color:#fff4e9;
  }
  .declined{
    color:#abadb0;
    background-color:#f5f5f5;
  }
  .interview{
    color:#57d38f;
    background-color:#e6f8ee;
  }

  footer{
    margin-top:28px;
    display:flex;
    align-items:center;
    button{
      margin-left:16px;
    }
  }
 }

 @media(max-width:576px){
    padding-top:40px;
  }
`