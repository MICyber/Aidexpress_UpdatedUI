import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const BannerSlider = () => {
    const { t } = useTranslation();
    const data = [
        {
            id: 1,
            image: 'https://img.freepik.com/premium-photo/poor-people-generative-ai_61243-7770.jpg',
           
            title: t("title"),
            description: t("description"),
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://img.freepik.com/premium-photo/portrait-happy-indian-family_883088-1970.jpg',
            title: t("title"),
            description: t("description"),
            button: 'htttps://www.google.com'
        }
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true, // Autoplay enabled
        autoplaySpeed: 3000,
    };
    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <Link to="/ApplicationForm">
                                        <button>{t("Applynow")}</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider;