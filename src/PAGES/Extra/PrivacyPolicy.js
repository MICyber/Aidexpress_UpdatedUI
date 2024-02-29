import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
        <h3>Privacy Policy Overview</h3>
        <p>Aidexpress maintains a variety of websites (including ***************) and provides its services in relation to donations, both online and offline (altogether, the “Services”), as well as interactions with you. The Privacy Policy below applies to visitors to our Services, donors, individuals working for our non-profit and corporate partners, suppliers and job applicants (altogether, “you”) and governs how we handle personal information in connection with Services and our interactions with you. This Privacy Policy describes what personal information we collect, how we use it, and your choices.</p>
        <p>We collect information from you when you visit and take actions on our Services. We use this information to provide and manage our Services. We use cookies and similar technologies to provide a better experience, improve our website track usage patterns and conduct marketing.</p>
        <p>You can access your data, edit your preferences, download your data, request deletion of your data, or revoke consent by visiting your account. Except for the purposes outlined below, we will not trade, share, or sell your personal information with anyone. Refer to the Privacy Policy below for complete details.</p>
        <p>If you have any questions about our Privacy Policy please contact us at </p>
        <p>******************</p>
      </div>

      <div className='pgcont1'>

        <h3>Information We Collect</h3>
        <p>Information you provide to us includes:</p>
        

        <p>Contact details such as your first and last name, organisation name (if applicable), address, email, phone number, electricity bill and family details. You may choose to provide additional information, such as your mailing address, a photo, etc., if you create a profile or create a Aidexpress fundraiser. Account data such as the username, email, password or photo that you use to establish an online account with us directly.</p>
      </div>
      
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default PrivacyPolicy