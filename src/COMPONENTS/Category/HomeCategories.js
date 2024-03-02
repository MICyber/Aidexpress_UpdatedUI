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
          <h1>{t("category1")}</h1>
          <p>{t("category1title2")}</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>{t("category2")}</h1>
          <p>{t("category2title2")}</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>{t("category3")}</h1> 
          <p>{t("category3title2")}</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>{t("category4")}</h1>
          <p>{t("category4title2")}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
