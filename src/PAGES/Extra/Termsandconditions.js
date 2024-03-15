import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
        heading="Terms & Conditions"
      />


      <div className='pgcont1'>
        <h3>Eligibility Criteria</h3>
        <p>Clearly state the criteria that determine eligibility for AidExpress benefits, such as income thresholds, family size, and residency requirements.</p>
      </div>
      <div className='pgcont1'>
        <h3>Application Process</h3>
        <p>Provide details on how individuals can apply for AidExpress benefits, including required documentation and submission procedures.</p>
      </div>

      <div className='pgcont1'>

        <h3>Benefit Calculation</h3>
        <p>Explain how the amount of assistance is determined based on the applicant's income, household composition, and other relevant factors.</p>
      </div>

      <div className='pgcont1'>
        <h3>Rights and Responsibilities</h3>
        <p>Outline the rights and responsibilities of both beneficiaries and the AidExpress program, including obligations to report changes in income or family circumstances.</p>
      </div>

      <div className='pgcont1'>
        <h3>Payment Schedule</h3>
        <p>Specify the frequency and method of benefit payments, whether it's monthly, quarterly, or otherwise, and how payments are disbursed (e.g., direct deposit, cash, voucher).</p>
      </div>

      <div className='pgcont1'>
        <h3>Compliance with Laws</h3>
        <p>Affirm the program's commitment to comply with all applicable laws, regulations, and government policies governing social welfare programs.</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions