// Imports
import styled from "styled-components";

// Image
import pizza from '../../assets/Header/pizza.png'

// Styled Components
export const HeaderS = styled.header`
    background: url(${pizza}) no-repeat center;
    width: 100%;
    height: 80vh;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    @media  (max-width: 768px){
        height: 12.3125rem;
        background-attachment: inherit;
        }
`

export const Title = styled.h1`
    color: #FFF;
    font-size: 6rem;
    font-weight: 600;

    @media (max-width: 768px){
        font-size: 3rem;
    }
`

export const SpanS = styled.span`
    color: #FFA200; 
`