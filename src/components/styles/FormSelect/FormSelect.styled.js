import styled from "styled-components";

export const FormSelectWrapper=styled.div`
    select{
        height:42px;
        background-color:#f0f4f8;
        border-radius:8px;
        outline:none;
        box-shadow:none;
        border: 1px solid ${({theme})=>theme.colors.main};
        &:hover{
            outline:none;
        }
    }
`