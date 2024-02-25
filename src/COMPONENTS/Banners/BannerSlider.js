import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import { Link } from 'react-router-dom'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Receive your incentives without any hassle.',
            description: 'Experience the ease of receiving your incentives with no unnecessarycomplications or hassles',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Receive your incentives without any hassle.',
            description: 'Experience the ease of receiving your incentives with no unnecessarycomplications or hassles',
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
                                    <Link to='/Application'><button >Apply Now</button></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider