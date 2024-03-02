import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/Images/image_sms.png";
import img2 from "../../ASSETS/Images/track.png";
import img3 from "../../ASSETS/Images/image_language.png";
import img4 from "../../ASSETS/Images/image_donate.png";
import img5 from "../../ASSETS/Images/image_sms.png"
import { useTranslation } from 'react-i18next';

const HomeCategories = () => {
  const { t } = useTranslation();
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img5} alt="img1" />
        <div className="content">
          <h1>{t("SMS")}</h1>
          <p>{t("SMSDetails")}</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>{t("Track")}</h1>
          <p>{t("TrackDetails")}</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>{t("Multilingual")}</h1> 
          <p>{t("MultilingualDetails")}</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>{t("Support")}</h1>
          <p>{t("SupportDetails")}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
