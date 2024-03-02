/**import React from 'react';
import './Donation.css'

const Donation = () => {
  return (
    <div className="donation-container">
      <div className="donation-text">
        <h2><center><b>Support Our Cause</b></center></h2>
        <p>
          Your contribution helps us make a difference. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
      <div className="donation-image">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-fbf9621efdc6cd1e5a1e56f0e41fd7ef" // Replace with your actual image URL
          alt="Donation"
        />
      </div>
    </div>
  );
}
export default Donation;**/

// Donation.js
import React from 'react';
import './Donation.css'
import { useTranslation } from 'react-i18next';


const Donation = () => {
  const { t } = useTranslation();
  return (
    <div className="donation-container">
      <div className="donation-content">
        <div className="donation-text">
          <h2><center><b>{t("donation")}</b></center></h2>
          <p>{t("donationtitle")}</p>
          <button className="donate-button">Donate Now</button>
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

