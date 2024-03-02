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
            image: 'https://amichey.ca/wp-content/uploads/2020/04/iStock-1480574526-1536x1024.jpg',
            title: t("title"),
            description: t("description"),
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: t("title"),
            description: t("description"),
            button: 'htttps://www.google.com'
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    /*const openGoogleForm = () => {
        // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPTGjoKfGktNIk4R8f4GzLtZ1EUpQ8_ET-tn4mvvmPNa1dGQ/viewform?usp=sf_link';
    
        // Open the Google Form in a new window
        window.open(googleFormUrl, '_blank');
      };*/


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