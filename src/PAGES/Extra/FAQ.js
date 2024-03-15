import React, { useEffect, useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [activesection, setactivesection] = useState(0)


  const faq = [
    {
      id: 1,
      question: 'What is the AidExpress system?',
      answer: 'The AidExpress system is a government-led initiative in Sri Lanka designed to uplift low-income families by providing them with financial assistance, skills training, and other forms of support.'
    },
    {
      id: 2,
      question: 'Who is eligible for AidExpress benefits?',
      answer: 'Eligibility for AidExpress benefits is based on the household income and other criteria set by the government. Typically, households with low incomes or those identified as economically disadvantaged are eligible.'
    },
    {
      id: 3,
      question: 'What benefits does the AidExpress system offer?',
      answer: 'The AidExpress system offers a range of benefits, including financial assistance in the form of cash grants, access to skills training programs, subsidized loans for income-generating activities, and various other social welfare services.'
    },
    {
      id: 4,
      question: 'What is the goal of the AidExpress system?',
      answer: 'The primary goal of the AidExpress system is to alleviate poverty and promote socio-economic empowerment among low-income families in Sri Lanka. By providing targeted assistance and support, the program aims to improve the living standards and overall well-being of beneficiaries.'
    },
    {
      id: 5,
      question: 'How can individuals apply for the AidExpress program?',
      answer: 'Individuals interested in applying for the AidExpress program can typically do so through their local government authorities or AidExpress officers who can provide information on eligibility criteria and the application process.'
    }
  ]

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        heading="FAQs"
        bannerimage='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D'
      />
      {/* <p>faq</p> */}

      <div className='faqcontainer'>
        {/* {
          activesection == 1 ?
            <div className='faq'>
              <div className='faqhead'>
                <h1>What is Lorem Ipsum?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setactivesection(0)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='faqbody'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            :
            <div className='faq'>
              <div className='faqhead'>
                <h1>What is Lorem Ipsum?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setactivesection(1)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            </div>
        } */}


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