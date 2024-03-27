import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading={t("About us")} 
        bannerimage= 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
        />
        <div className='pgleft pgcommon'>
            <img src='https://i0.wp.com/allthingstalent.org/wp-content/uploads/2023/01/Vision-Mission.jpg?fit=750%2C563&ssl=1' alt='noimg' />

            <div>
                <h1>{t("Vison")}</h1>
                <p>{t("VisionDetails")} </p>
            </div>
            
            <div>
                <h1>{t("Mission")}</h1>
                <p>{t("MissionDetails")}</p>
            </div>

            
        </div>
        <div className='pgright pgcommon'>
            <img src='https://t4.ftcdn.net/jpg/01/58/97/65/360_F_158976569_z5DaIxsxlztkq8yks97DLZmE5uF8G3I6.jpg' alt='noimg' />

            <div>
                <h1>{t("Story")}</h1>
                <p>{t("StoryDetails")}</p>

            </div>

            
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.jpg?s=612x612&w=0&k=20&c=MaI8mTFkStJHG4ZyKXNbynkdSCObejk73qutdW7vS7k=' alt='noimg' />

            <div>
                <h1>{t("Objective")}</h1>
                <p>{t("ObjectiveDetails")}</p>

            </div>
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About