import React from 'react'
import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import websiteLogo from './imagesUsed/websiteLogo.png' 


const navItems=[
    {
        title:'Home',
        url:'#',
        cName:'navLinks',
        ID:'homeInNav',
        link:'/'
    },
    {
        title:'My Portfolio',
        url:'#',
        cName:'navLinks',
        ID:'aboutMeInNav',
        link:'/aboutMe'
    },
    {
        title:'Contact & Links',
        url:'#',
        cName:'navLinks',
        ID:'contactMeInNav',
        link:'/contactMe'
    }
]

export default function Navbar() {
    const [navchange,setNavchange]=useState('navClose');
    const changeNav=()=>{
      if(navchange==='navClose')
      setNavchange('navOpen');
      else setNavchange('navClose');
    }
  return (
    <nav>
       
        <div className='navImage' onClick={changeNav}><span class="material-symbols-outlined">menu</span></div>
        <div className='logoInNav' style ={{ backgroundImage: `url(${websiteLogo})`}}></div>
        <ul className={`navMenu ${navchange}`}>
            {navItems.map((item,index)=>{
                return(
                    <li id={item.ID} className='navItems' key={index}><Link to={item.link}><a className={item.cName} href={item.url}>{item.title}</a></Link></li>
                )
            })}
        </ul>
    </nav>
  )
}
