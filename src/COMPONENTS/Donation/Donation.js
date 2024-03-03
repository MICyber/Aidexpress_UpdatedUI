import React from 'react';
import './Donation.css'
import { useTranslation } from 'react-i18next';
import { Link} from 'react-router-dom';


const Donation = () => {
  const { t } = useTranslation();
  return (
    <div className="donation-container">
      <div className="donation-content">
        <div className="donation-text">
          <h2><center><b>{t("donation")}</b></center></h2>
          <p>{t("donationtitle")}</p>
          <Link to="/DonateForm">
                <button className="donate-button">Donate Now</button>
          </Link>
        </div>
      </div>
      <div className="donation-image">
        <img
          src="https://www.crowdfunder.co.uk/uploads/projects/852572.jpg?1670519733" 
          alt="Donation"
        />
      </div>
    </div>
  );
};

export default Donation;

