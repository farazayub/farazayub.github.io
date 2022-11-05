import React from 'react'
import './aboutMe.scss'
import dpsPatna from './imagesUsed/dpsPatna.png'
import iiitBhopal from './imagesUsed/iiitBhopal.png'
import myPic from './imagesUsed/myPic.png'
import skillLogo from './imagesUsed/skillLogo.png'
import interestsLogo from './imagesUsed/interestsLogo.png'
import internshipLogo from './imagesUsed/internshipLogo.png'
import { useEffect } from 'react'

const myInfo=[
  {
    title: 'Schooling',
    content:'I have completed my entire schooling right from nursery to standard 12th from DELHI PUBLIC SCHOOL of Patna. Regarded as one of the best schools in Patna,this school has helped me mould myself to be a confident person with great Communication and Leadership skills.',
    image : true,
    imageSource: dpsPatna,
    viewMore: false
  },
  {
    title: 'Batchelors in Information Technology',
    content:'I am currently pursuing BTech. in Information Technology from INDIAN INSTIUTE OF INFORMATION TECHNOLOGY,BHOPAL. One of the fastest growing and premier IIITs of India, have been designated as Instiute of National Importance by the Indian Government.',
    image: true,
    imageSource: iiitBhopal,
    viewMore: false
  },
  {
    title: 'Skills',
    content:'I have knowledge of the Full Stack Web Development and personally I use MERN stack for all my full stack Web development projects. Apart from this I have  good command on C++ and JavaScript and its various libraries and I generally use C++ for all my DSA/Competitive coding needs.',
    image: true,
    imageSource: skillLogo,
    viewMore: false
  },
  {
    title: 'Internships',
    content:'I worked as a summer intern in a startup -"DIGIFUNDTECH", in the summer of "22, where i got hands on experience of closesly watching a product being developed right front the very start to its deployment phase. I made my contributions in the front-end of their mobile app which was based on REACT Native and even today at times I make small contributions when needed. To read my detailed experience click on the link below... ',
    image: true,
    imageSource: internshipLogo,
    viewMore: true
  },
  {
    title: 'Hobbies and Interest',
    content:'Apart from my love of technologies, I love exploring new places. I am fascinated by massive mountains and so whenever I have more than a couple of days to kill, I go backpackking across our mighty Himalayan regions. The beauty, tranquility and the general dreaminess of those high altitude meadows fills me with much needed clarity and energy to go about my daily city life. Other than travelling my only other love is for ROCK music.',
    image: true,
    imageSource: interestsLogo,
    viewMore: 'false'
  }

]

export default function AboutMe() {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 },[])
  const checkImage=(item)=>{
    if(item.image===true)
    return(
     <div className='logoInTextBox' style ={{ backgroundImage: `url(${item.imageSource})`}}></div>
    )
  }
  const isViewMore=(check)=>{
    if(check===true)
    return(
      <div className='viewMoreContent'>View More</div>
    )
  }
  return (
    <div className='aboutMeContainer'>
      <div className='myPictureBox' style ={{ backgroundImage: `url(${myPic})`}}></div>
      <div className='aboutMeContent'>
    {myInfo.map((item,index)=>{
     return(
     <div className='aboutMeTextBox' key={index}>
        <h3 className='aboutMeTextBoxHeading'>{item.title}</h3>
        {checkImage(item)}
        <p className='aboutMeTextBoxContent'>{item.content}</p>
        {isViewMore(item.viewMore)}
     </div>
     )
    })}
      
      
      </div>
    </div>
  )
}
