import { AboutDescription, Container, DivImage, DivText, ImageS, Link, Pizza, PizzaTwo, SectionS, Title, Tomato } from "./styles";

import restaurante from './assets/restaurante.png'
import pizza from './assets/pizza_1.png'
import pizzaTow from './assets/pizza_2.png'
import tomato from './assets/tomato.png'

const About: React.FC = () => {
    return (
        <SectionS>
            <Pizza alt="Imagem de pizza" src={pizza}/>
            <PizzaTwo alt="Imagem de pizza" src={pizzaTow}/>
            <Tomato alt="Imagem de tomate" src={tomato}/>
            <Container>
                <DivImage>
                    <ImageS
                        alt="Imagem do restaurante"
                        src={restaurante}
                    />
                </DivImage>
                <DivText>
                    <Title>Sobre a La Pizza</Title>
                    <AboutDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum.
                    </AboutDescription>
                    <Link>Ler mais</Link>
                </DivText>
            </Container>
        </SectionS>
    )
}

export default About;