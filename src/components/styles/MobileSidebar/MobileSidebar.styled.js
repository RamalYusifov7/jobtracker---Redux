import styled from "styled-components";

export const MobileSidebarWrapper=styled.aside`
    display:none;
    @media (max-width:992px) {
        display:block;
        background-color:rgba(0, 0, 0, 0.40);
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:9999;
        visibility:hidden;
        opacity:0;
        transition:0.3s ease all;
        pointer-events:none;
        transition:0.5s ease all;
        .wrapper{
            background-color:${({theme})=>theme.colors.primary};
            height:calc(100% - 32px);
            position:relative;
            margin:16px;
            display:flex;
            align-items:center;
            justify-content:center; 
            border-radius:8px;
        }
        .menu-list a{
            justify-content:center;
        }
        &.active{
            opacity:1;
            visibility:visible;
            pointer-events:visible;
        }
        .close-btn{
            position:absolute;
            top:10px;
            left:20px;
            color:white;
            font-size:28px;
            transition:0.3s ease all;
            &:hover{
                color:${({theme})=>theme.colors.danger}
            }
        }
    }

`