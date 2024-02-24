import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

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
                <h1>Vision</h1>
                <p>“Creating a prosperous Sri Lanka where poverty is at a minimum” </p>
            </div>
            
            <div>
                <h1>Mission</h1>
                <p>Contributing to a stable national development where poverty is at a minimum through community participation centered development.</p>
            </div>

            
        </div>
        <div className='pgright pgcommon'>
            <img src='https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9uYXRlfGVufDB8fDB8fHww' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>The Sri Lankan government launched its Samurdhi (or Prosperity) Programme in 1995 with the main goal of reducing poverty in Sri Lanka. It had a wide network of national and local level officials administering its activities and was led by its own Ministry and the Samurdhi Authority.</p>

            </div>

            
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1599461149326-2e9dd1113a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvbmF0ZXxlbnwwfHwwfHx8MA%3D%3D' alt='noimg' />

            <div>
                <h1>Objectives</h1>
                <p> Creation of small groups and thereby identifying the potential of rural families through building up of Samurdhi societies, and the strengthening of such rural communities.Development of the urban, rural and estate sectors by the year 2013 through economic, physical and social development.Contribution to provincial development through the coordination of local and international government and non governmental organizations.</p>

            </div>
        </div>
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About