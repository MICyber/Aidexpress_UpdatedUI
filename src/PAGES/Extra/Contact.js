import React, { useEffect, useState } from 'react';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './Extrapages.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const [userData, setUserData] = useState({
        Name: '', Email: '', Subject: '', Message: ''
    });

    const data = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]: value});
    };

    const send = async (e) => {
        e.preventDefault();
        const {Name, Email, Subject, Message} = userData;
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({Name, Email, Subject, Message})
        };
        const res = await fetch('https://aidexpress-25fd8-default-rtdb.firebaseio.com/Meaasges.json', options);
        console.log(res);
    };

    const [rating, setRating] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='extrapage'>
            <Navbar reloadnavbar={false}/>
            <SingleBanner
                bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
                heading={t("ContactUs")}
            />
            <div className='pgleft pgcommon'>
                <img src='https://images.unsplash.com/photo-1527563427650-2fa0b1558cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhbWlseSUyMGhlbHB8ZW58MHx8MHx8fDA%3D' alt='noimg' />
                <div>
                    <h1>{t("StartANewCase")}</h1>
                    <p>{t("StartANewCaseDetails")}</p>
                </div>
            </div>
            <div className='pgright pgcommon'>
                <img src='https://images.unsplash.com/photo-1603714228681-b399854b8f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fENvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D' alt='noimg' />
                <div>
                    <h1>{t("TalkWithUs")}</h1>
                    <p> {t("Address")}</p>
                    <p>{t("Phone")}</p>  
                    <p>{t("Email1")}</p>
                    <h1>{t("Message1")}</h1>
                    <p>{t("Form")}</p>
                </div>
            </div>

            <form className='extrapageform'>
                <h1 className='formheading'>{t("Get")}</h1>
                <div className='contact_box'>
                    <input type='text' name='Name' value={userData.Name} placeholder={t("Name")} autoComplete='off' onChange={data}/>
                    <input type='email' name='Email' value={userData.Email} placeholder={t("EmailButton")} autoComplete='off' onChange={data}/>
                    <input type='text' name='Subject' value={userData.Subject} placeholder={t("Subject")} autoComplete='off' onChange={data}/>
                    <textarea value={userData.Message} name="Message" placeholder={t("Message")} cols="30" rows="10" autoComplete='off' onChange={data}></textarea>
                </div>

                <div className='formgroup'>
                    <label htmlFor=''>{t("Rating")}</label>
                    <div className='rating'>
                        {[...Array(5)].map((_, index) => (
                            <div className='star' key={index} onClick={() => setRating(index + 1)}>
                                {rating >= index + 1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className='sendbox'>
                    <button className='send' onClick={send}>{t("Send")}</button>
                </div>
            </form>

            <Footer1 />
            <Footer2 />
        </div>
    );
};

export default Contact;
