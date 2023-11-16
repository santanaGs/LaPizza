// Imports
import styled from 'styled-components'

// Styled Components
export const SectionS = styled.section`
    padding-block: 8rem;
    position: relative;
    background-color: #FCFCFC;
    position: relative;
`

export const Container = styled.div`
    width: min(90%, 85.5rem);
    margin: 0 auto;
    display: flex;
    gap: 6rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const DivImage = styled.div`

`

export const ImageS = styled.img`
    width: 28rem;
    height: auto;

    @media (max-width: 768px){
        width: 100%;
        margin: 0 auto;
    }
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Title = styled.h3`
    color: #2E2E2E;
    font-size: 2.25rem;
    font-weight: 600;

    @media (max-width: 768px){
       margin: 0 auto;
    }
`

export const AboutDescription = styled.p`
    width: 28.625rem;
    color: #2E2E2E;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem; /* 162.5% */

    @media (max-width: 768px){
        width: 20rem;
       margin: 0 auto;
       text-align: justify;
    }
`

export const Link = styled.a`
    text-decoration: none;
    background: #FFA200;
    padding: 0.5rem 2rem;
    border-radius: 1.5625rem;
    color: #2E2E2E;
    font-style: normal;
    font-weight: 600;
    transition: .3s;
    width: max-content;

    &:hover{
        background: #da8a00;
        scale: 1.05;
    }
`

export const Pizza = styled.img`
    width: 6.6795rem;
    height: 6.68675rem;
    position: absolute;
    left: 20%;
    top: 35%;

    @media (max-width: 768px){
        display: none;
    }
`
export const PizzaTwo = styled.img`
    width: 8.01088rem;
    height: 8.01088rem;
    position: absolute;
    right: 15%;
    bottom: 10%;

    @media (max-width: 768px){
        display: none;
    }
`

export const Tomato = styled.img`
    width: 9.375rem;
    height: 8.26013rem;
    position: absolute;
    top: -7%;
    right: 10%;

    @media (max-width: 768px){
        display: none;
    }
`