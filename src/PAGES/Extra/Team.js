// import React from 'react'
// import '../Extra/Team.css'
// import team01 from '../../images/team-01.png'
// import team02 from '../../images/team-02.jpg'
// import team03 from '../../images/team-03.png'
// import team04 from '../../images/team-04.png'
// import team05 from '../../images/team-05.png'


// const teamMembers = [
//     {
//         imgUrl: team01,
//         name: 'Mihira Prabhashwara Weerasingha',
//         position: 'Team Leader'
//     },

//     {
//         imgUrl: team02,
//         name: 'Ama De Silva',
//         position: 'Team Member'
//     },

//     {
//         imgUrl: team03,
//         name: 'Samadhi Lochana Ediriwickrama',
//         position: 'Team Member'
//     },

//     {
//         imgUrl: team04,
//         name: 'Thanaal Fokhan',
//         position: 'Team Member'
//     },

//     {
//         imgUrl: team05,
//         name: 'Kalani Shehara',
//         position: 'Team Member'
//     },
// ]

// const Team = () => {
//     return (
//         <section className='our__team'>
//             <div className='container'>
//                 <div className='team__content'>
//                     <h6 className='subtitle'>AidExpress</h6>
//                     <h2>
//                         Join With <span className='highlight'>Our Team</span>
//                     </h2>
//                 </div>
//                 <div className='team__wrapper'>
//                     {
//                         teamMembers.map((item, index) => (
//                             <div className='team__item' key={index}>
//                                 <div className='team__img'>
//                                     <img src={item.imgUrl} alt='' />
//                                 </div>
//                                 <div className='team__details'>
//                                     <h4>{item.name}</h4>
//                                     <p className='description'>{item.position}</p>

//                                     <div className='team__member-social'>
//                                         <span><i class='ri-linkedin-line'></i></span>
//                                         <span><i class='ri-twitter-line'></i></span>
//                                         <span><i class='ri-facebook-line'></i></span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Team