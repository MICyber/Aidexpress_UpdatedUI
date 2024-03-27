import React from 'react'
import manwithphone from '../../ASSETS/manwithphone.png'
import './Footer1.css'
import { useTranslation } from 'react-i18next';

const Footer1 = () => {
    const { t } = useTranslation();
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={manwithphone} alt='manwithphone' />
            </div>
            <div className='right'>
                <h1>{t("footer1title1")}</h1>
                <p>{t("footer1title2")}</p>
            </div>
        </div>
    )
}

export default Footer1