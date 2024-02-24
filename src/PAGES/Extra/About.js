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
        bannerimage= 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fkidsandclays.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fbigstock-Make-a-Donation-Charity-Donate-140880731.jpg&tbnid=o40VYeHc-USvdM&vet=12ahUKEwiOitOD1sOEAxVdcmwGHalUBPoQMygLegUIARCMAQ..i&imgrefurl=https%3A%2F%2Fkidsandclays.com%2Fproduct%2Fcredit-card-donation%2F&docid=vnWBTXf1Ty4G4M&w=700&h=450&q=donation&ved=2ahUKEwiOitOD1sOEAxVdcmwGHalUBPoQMygLegUIARCMAQ'
        />
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />

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
            <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>The Sri Lankan government launched its Samurdhi (or Prosperity) Programme in 1995 with the main goal of reducing poverty in Sri Lanka. It had a wide network of national and local level officials administering its activities and was led by its own Ministry and the Samurdhi Authority.</p>

            </div>

            
        </div>
        <div className='pgleft pgcommon'>
            <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' />

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