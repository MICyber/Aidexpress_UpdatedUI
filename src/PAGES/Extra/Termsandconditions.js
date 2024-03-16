import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { useTranslation } from 'react-i18next';

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { t } = useTranslation();

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
        heading={t("Terms and Condition")}
      />


      <div className='pgcont1'>
      <h3>{t("EligibilityCriteria")}</h3>
        <p>{t("EligibilityCriteriaDetails")}</p>
      </div>
      <div className='pgcont1'>
      <h3>{t("ApplicationProcess")}</h3>
        <p>{t("ApplicationProcessDetails")}</p>
      </div>

      <div className='pgcont1'>

      <h3>{t("BenefitCalculation")}</h3>
        <p>{t("BenefitCalculationDetails")}</p>
      </div>

      <div className='pgcont1'>
      <h3>{t("RightsAndResponsibilities")}</h3>
        <p>{t("RightsAndResponsibilitiesDetails")}</p>
      </div>

      <div className='pgcont1'>
      <h3>{t("PaymentSchedule")}</h3>
        <p>{t("PaymentScheduleDetails")}</p>
      </div>

      <div className='pgcont1'>
      <h3>{t("ComplianceWithLaws")}</h3>
        <p>{t("ComplianceWithLawsDetails")}</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions