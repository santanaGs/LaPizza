// Imports
import React from 'react'

// Styled Components
import { Acafrao, Carrossel, Cogumelo, Container, Oregano, Peixe, Pimenta, SectionS, Title } from './styles';

// Images
import oregano from '../../assets/Sellers/oregano.png'
import pimenta from '../../assets/Sellers/pimenta.png'
import peixe from '../../assets/Sellers/peixe.png'
import cogumelo from '../../assets/Sellers/cogumelo.png'
import acafrao from '../../assets/Sellers/acafrao.png'
import Card from '../../components/Card';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SellersPizzas {
    image: any;
    title: string;
    description: string;
    price: string;
    link: string;
}

const pizzas: SellersPizzas[] = [
    {
        image: 'https://imgur.com/s4PbKrr.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/WJyaQsR.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/al6V0g3.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/hlFdSYU.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/WJyaQsR.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/s4PbKrr.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/WJyaQsR.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/al6V0g3.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
    {
        image: 'https://imgur.com/s4PbKrr.png',
        title: 'La cuma',
        description: 'Lorem ipsum dolor sit amet, consecttetur adipsicing elit.',
        price: '23',
        link: '/'
    },
]

// Component
const Sellers: React.FC = () => {
    // Rendering
    return (
        <SectionS>
            <Container>
                <Title>Mais vendidas</Title>
                <Oregano src={oregano} />
                <Pimenta src={pimenta} />
                <Peixe src={peixe} />
                <Cogumelo src={cogumelo} />
                <Acafrao src={acafrao} />
                <Carrossel>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        // spaceBetween={5}
                        // slidesPerView={4}
                        pagination={{ clickable: true }}
                        style={{
                            overflowX: 'clip',  
                        }}
                        className='mySwiper'
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 5,
                            },
                            768: {
                              slidesPerView: 1,
                              spaceBetween: 5,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 5,
                            },
                          }}
                    >
                        {pizzas.map((pizza, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card
                                        image={pizza.image}
                                        title={pizza.title}
                                        description={pizza.description}
                                        price={pizza.price}
                                        link={pizza.link}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Carrossel>
            </Container>
        </SectionS>
    )
}
export default Sellers;