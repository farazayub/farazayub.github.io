import React from 'react'
import './home.scss'
import myPic from './imagesUsed/myPic.png'
import downloadIcon from './imagesUsed/downloadIcon.png'
import reactIcon from './imagesUsed/reactIcon.png'
import nodeIcon from './imagesUsed/nodeIcon.png'
import expressIcon from './imagesUsed/expressIcon.png'
import mongoIcon from './imagesUsed/mongoIcon.png'
import {useState} from 'react'
import { useEffect , useRef} from 'react'
import {useInView} from 'react-intersection-observer'



const myTechnologies=[
  {
    title: 'reactJS',
    imageLink: reactIcon,
    ID:'react',
    info:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used as a base in the development of single-page, mobile, or server-rendered applications.'
  },
  {
    title: 'nodeJS',
    imageLink: nodeIcon,
    ID:'node',
    info:'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting'
  },
  {
    title: 'expressJS',
    imageLink: expressIcon,
    ID:'express',
    info:'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.'
  },
  {
    title: 'mongoDB',
    imageLink: mongoIcon,
    ID:'mongo',
    info:'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc..'
  }
]


export default function Home() {
  
  
  const initials='Ahmad Faraz Ayub';
  const byLine='~Web Developer since 2021~';
  const resumeLink='https://drive.google.com/file/d/15_Y6JsMOGPbQvAMEcmDZyNeRTPoVt17e/view?usp=sharing'
  
  const [showInfo,setShowInfo]=useState(false);
  const [info,setInfo]=useState('');
  const { ref : myRef, inView } = useInView();
    useEffect(()=>{
       window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[]);

    
  return (

    <div className='homeContainer' id='a'>
    {showInfo && (<div className='techInfoBox'>{info}</div>)}
    <div className='innerContainer'>
    <div className='homeCircle'>
    <div className='profilePicture' style={{backgroundImage:`url(${myPic})`}}></div>
    <div className='initials' id='ab'><h2>{initials}</h2></div>
    <div className='byLine'><h3>{byLine}</h3></div>
    </div>
    <div className='resumeDownload'>
    <a  href={resumeLink} download='FarazResume' rel="noreferrer" target='_blank' className='downloadIconImage' style={{backgroundImage:`url(${downloadIcon})`}}>ResumeLink</a>
    <div className='resumeDownloadLink'>click here to download my Resume</div>

    </div>
    <div className='technologies'>
    <div className='techHeading'><h2>Technologies I work in:</h2></div>
    {myTechnologies.map((item,index)=>{
        return(
         
          <div ref={myRef} className={`tech ${inView?item.ID:'inVisible'}`}    key={index}  onMouseEnter={()=>{
          setShowInfo(true);
          document.getElementsByClassName('innerContainer')[0].style.opacity='0.1';
          setInfo(item.info);
        }} onMouseLeave={()=>{
          setShowInfo(false);
          document.getElementsByClassName('innerContainer')[0].style.opacity='1';
        }} style={{backgroundImage:`url(${item.imageLink})`}}>
        </div>
        
    )
    })}
    </div>
    </div>
    </div>

  )
}
