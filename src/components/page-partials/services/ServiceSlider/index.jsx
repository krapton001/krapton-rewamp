import React, { Fragment } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ServiceListCard from '../ServiceList/ServiceListCard';

const ServiceSlider = (services = []) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        centerMode: true,
        infinite: true,
        className: 'center',
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {services.map((service, idx) => (
                <Fragment key={`service-${idx}`}>
                    <ServiceListCard service={service} />
                </Fragment>
            ))}
        </Slider>
    );
};

export default ServiceSlider;
