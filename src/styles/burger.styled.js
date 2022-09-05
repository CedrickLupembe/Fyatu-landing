import styled from "styled-components";

import size from "../Breakpoints";


export const BurgerBtn = styled.div`

    position: relative;
    width: 25px;
    cursor: pointer;
    z-index: 600 !important;
    height: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div{

        width: 100%;
        height: 2px;
        background-color: var(--black);
        border-radius: 5px;
        transform-origin: 1px;
        transition: all 0.3s linear;


            &:nth-child(1){
                transform: ${({ open }) => open ? 'rotate(45deg) translate(-11px, 4px)' : 'rotate(0)'};
                margin-left: ${({ open }) => open ? '17px' : '0'};
            }
            &:nth-child(2){
                transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({ open }) => open ? 0 : 1};
            }
            &:nth-child(3){
                transform: ${({ open }) => open ? 'rotate(-45deg) translate(-5px, -9px)' : 'rotate(0)'};
                width: ${({ open }) => open ? '100%' : '30%'};
                margin-left: ${({ open }) => open ? '17px' : '0'};
            }
    }



    /* Tablet device media queries */
    @media only screen and (max-width: ${size.md}){
        margin-left: -10px;
    }

`