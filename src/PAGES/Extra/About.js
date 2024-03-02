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
        heading="About Us"
        bannerimage= 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
        />
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D' alt='noimg' />

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
            <img src='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9uYXRlfGVufDB8fDB8fHww' alt='noimg' />

            <div>
                <h1>{t("Story")}</h1>
                <p>{t("StoryDetails")}</p>

            </div>

            
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1599461149326-2e9dd1113a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvbmF0ZXxlbnwwfHwwfHx8MA%3D%3D' alt='noimg' />

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