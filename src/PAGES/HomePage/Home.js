import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Donation from '../../COMPONENTS/Donation/Donation'


const Home = () => {
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />
      <Donation/>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home