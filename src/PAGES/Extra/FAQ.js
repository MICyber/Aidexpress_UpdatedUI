import React, { useEffect, useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [activesection, setactivesection] = useState(0)
  const { t } = useTranslation();


  const faq = [
    {
      id: 1,
      question: <h1>{t("question1")}</h1>,
      answer: <p>{t("answer1")}</p>
    },
    {
      id: 2,
      question: <h1>{t("question2")}</h1> ,
      answer: <p>{t("answer2")}</p>
    },
    {
      id: 3,
      question: <h1>{t("question3")}</h1> ,
      answer: <p>{t("answer3")}</p>
    },
    {
      id: 4,
      question: <h1>{t("question4")}</h1> ,
      answer: <p>{t("answer4")}</p>
    },
    {
      id: 5,
      question: <h1>{t("question5")}</h1> ,
      answer: <p>{t("answer5")}</p>
    }
  ]

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        heading= {t("FAQs")}
        bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
      />


      <div className='faqcontainer'>

        {
          faq.map((item, index) => {
            return (
              activesection == item.id ?
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>
                      {item.question}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(0)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='faqbody'>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
                :
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>{item.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(item.id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                  </div>
                </div>
            )
          })
        }


      </div>


      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default FAQ