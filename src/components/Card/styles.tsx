// Imports
import styled from 'styled-components'

// Styled Components
export const Container = styled.div`
    width: 16rem;
    height: 17.1875rem;
    border-radius: 1.5625rem;
    background: #FEF6F4;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.75rem;

    @media  (max-width: 768px){
        margin: 0 auto;
    }
`

export const ImageS = styled.img`
    width: 7.5rem;
    height: auto;
    position: absolute;
    top: -23%;
    left: 25%;
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 1rem;
`

export const Title = styled.p`
    color: #2E2E2E;
    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
`

export const Description = styled.p`
    width: 11.25rem;
    color: #616161;
    text-align: center;
    font-family: Sora;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
`

export const Price = styled.p`
    color: #2E2E2E;
    font-family: Sora;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const Link = styled.a`
    text-decoration: none;
    position: absolute;
    bottom: -3%;
    background: #FFA200;
    padding: 0.5rem 2rem;
    border-radius: 1.5625rem;
    color: #2E2E2E;
    font-style: normal;
    font-weight: 600;
    transition: .3s;
    scale: 1;

    &:hover{
        background: #da8a00;
        scale: 1.05;
    }
`

export const Favorite = styled.div`
    border-radius: 0.875rem;
    border: 2px solid #CF3031;
    background: #FFD4C9;
    width: 2.1875rem;
    height: 2.1875rem;
    position: absolute;
    top: -7%;
    right: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Coracao = styled.img`
    width: 0.8125rem;
    height: 0.75rem;
` 