import React from 'react'
import './contactMe.scss'
import linkedinIcon from './imagesUsed/linkedinIcon.png'
import githubIcon from './imagesUsed/githubIcon.png'
import gmailIcon from './imagesUsed/gmailIcon.png'
import { useEffect } from 'react'

const links=[
  {
    title:'Linkedin',
    link:'https://www.linkedin.com/feed/?doFeedRefresh=true&nis=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BfEYEYee8QuqSaMO37JxmeQ%3D%3D',
    iconLink: linkedinIcon
  },
  {
    title:'GitHubProfile',
    link:'https://github.com/farazayub',
    iconLink: githubIcon
  },
  {
    title:'Gmail',
    link:'',
    iconLink: gmailIcon
  }
]

export default function ContactMe() {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 },[])
  return (
    <div className='contactContainer'>
    <div className='contactDetailsBasic'>
      <p className='name'>Ahmad Faraz Ayub</p>
      <p className='contactNumber'>+917765991563 / +919334192327</p>
      <p className='eMail'>ahmadfarazayub@gmail.com</p>
    </div>
    {links.map((item,index)=>{
      return(
      <a href={item.link} id={item.title} rel="noreferrer" target='_blank' className='contactOptions' style={{backgroundImage:`url(${item.iconLink})`}}>{item.title}</a>
      )
    })}
    </div>
  )
}
