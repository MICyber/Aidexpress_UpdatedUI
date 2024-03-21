import React, { useEffect, useState, useTransition } from "react";
import "./Navbar.css";
import logo from "../../ASSETS/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";

import { useTranslation } from "react-i18next";
import LocalContext from '../../LocalContext';
import i18n from "../../118n";

const Navbar = () => {
  const [shows3, setshows3] = useState(false);
  const { t } = useTranslation();

  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LocalContext.Provider value={{ locale, setLocale }}>
      <nav>
        <div className="s1">
          <img src={logo} alt="logo" className="logo" />

          <div className="s2">
            <Link to="/">
              <a>{t("Home")}</a>
            </Link>

            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">{t("Donatenow")}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/DonationForm">{t("Donate")}</Dropdown.Item>
                <Dropdown.Item href="/DonateEvidence">{t("Evidence")}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link to="/about">
              <a>{t("Aboutus")}</a>
            </Link>

            <Link to="/contact">
              <a>{t("Contactus")}</a>
            </Link>

            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">{t("More")}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/FAQ">{t("FAQ")}</Dropdown.Item>
                <Dropdown.Item href="/privacypolicy">{t("Privacy Policy")}</Dropdown.Item>
                <Dropdown.Item href="/termsandconditions">{t("Terms and Condition")}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>
          <div className="right">
            <div className="s2">
              <Dropdown>
                <Dropdown.Toggle variant="" id="language-dropdown"><GrLanguage className="w-6 h-6" /></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleChange({ target: { value: "sin" } })}>සිංහල</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleChange({ target: { value: "tm" } })}>தமிழ்</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleChange({ target: { value: "en" } })}>English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="" id="user-dropdown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/AccessLevel">{t("Login")}</Dropdown.Item>
                <Dropdown.Item href="/AccessLevelForSignUp">{t("Signup")}</Dropdown.Item>
                <Dropdown.Item href="#">{t("Logout")}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

      {shows3 ? (
        <div className="s3">
          <div className="s31">
            <img src={logo} alt="logo" className="logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setshows3(!shows3)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <ul className="s32">
            <li>
              <Link to="/" className="stylenone">
              {t("Home")}
              </Link>
            </li>

            <li>
              <Dropdown>
                <Dropdown.Toggle variant="" id="donate-dropdown">
                {t("Donate Now")}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                  {t("Donate")}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">{t("Evidence")}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li>
              {" "}
              <Link to="/about" className="stylenone">
                <a>{t("About us")}</a>
              </Link>
            </li>

            <li>
              {" "}
              <Link to="/contact" className="stylenone">
                <a>{t("ContactUs")}</a>
              </Link>
            </li>

            <li>
              
            <Dropdown>
              <Dropdown.Toggle variant="" id="language-dropdown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-5.238 0-9-3.762-9-9s3.762-9 9-9 9 3.762 9 9-3.762 9-9 9zM12 7v3M12 17h0"
                  />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleChange({ target: { value: "sin" } })}>සිංහල</Dropdown.Item>
                <Dropdown.Item onClick={() => handleChange({ target: { value: "tm" } })}>தமிழ்</Dropdown.Item>
                <Dropdown.Item onClick={() => handleChange({ target: { value: "en" } })}>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle variant="" id="more-dropdown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
                <Dropdown.Item href="/privacypolicy">
                {t("Privacy Policy")}
                </Dropdown.Item>
                <Dropdown.Item href="/termsandconditions">
                {t("Terms & Conditions")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    ) : (
      <div className="s3">
        <div className="s31">
          <img src={logo} alt="logo" className="logo" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => setshows3(!shows3)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    )}
  </nav>
</LocalContext.Provider>
);
};

export default Navbar;
