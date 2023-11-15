// Imports
import React from "react";
import { Container, Coracao, Description, DivText, Favorite, ImageS, Link, Price, Title } from "./styles";

// Interface
interface CardProps{
    image: any;
    title: string;
    description: string;
    price: string;
    link: string;
}

// Image
import coracao from '../assets/coracao.svg'

// Component
const Card: React.FC<CardProps> = (props: CardProps) => {
    return(
        <Container>
            <ImageS src={props.image}/>
            <DivText>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </DivText>
            <Price><span>R$</span>{props.price}</Price>
            <Link href={props.link}>Comprar agora</Link>
            <Favorite>
                <Coracao src={coracao}/>
            </Favorite>
        </Container>
    )
}

export default Card;