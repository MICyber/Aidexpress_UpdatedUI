import React, { useEffect } from 'react';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './PrivacyPolicy.css'
import { useTranslation } from 'react-i18next';


const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
        heading={t("Privacy Policy")}
      />
      <div className='pgcont1'>
        <h3>{t("PrivacyPolicyOverview")}</h3>
        <p>{t("PrivacyPolicyOverviewDetails1")}</p>
        <p>{t("PrivacyPolicyOverviewDetails2")}</p>
        <p>{t("PrivacyPolicyOverviewDetails3")}</p>
        <p>{t("PrivacyPolicyOverviewDetails4")} <br />
        <strong>https://iitaidexpress.000webhostapp.com/</strong></p>
      </div>

      <div className='pgcont1'>
        <h3>{t("InformationWeCollect")}</h3>
        <p>{t("Information")}</p>
        <p>{t("ContactDetails")}</p>
      </div>
      
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default PrivacyPolicyPage;
