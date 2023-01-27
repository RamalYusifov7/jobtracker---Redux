import styled from "styled-components";

export const MainForm=styled.form`
        background-color:white;
        padding:40px 36px;
        border-radius:8px;
        margin-top:36px;
        .row{
            align-items:flex-end
        }
       button,select{
        margin-bottom:24px;
       }
       .clear-form{
        margin-right:16px
       }
       label {
        margin-bottom:8px
       }
       @media(max-width:576px){
        padding:28px 12px;
       }
    `