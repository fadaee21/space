import React, { useState } from 'react'
import { Header } from '../../components/header/Header'
import './technology.style.css'
import data from './data-tech.json'
export const Technology = () => {
  const [launcher, setLauncher] = useState(0)
  const tech = data[launcher]
  return (
    <div className='background-tech'>
      <div className="margin-position">
        <Header />
        <div className="tech-p-desktop ">
                <span>03</span>
                <p>SPACE LAUNCH 101</p>
              </div>
        {[tech].map(item => {
          const { id, techTitle, techHeader, techExplanation, imagePortrait, imageLandscape } = item;
         return <div className="tech" key={id}>
           
            <div className="tech-img">
              <div className="tech-p">
                <span>03</span>
                <p>SPACE LAUNCH 101</p>
              </div>
              <img className='imageLandscape' src={imageLandscape} alt={techHeader} />
              <img className='imagePortrait' src={imagePortrait} alt={techHeader} />
            </div>
            <div className="number">
              <span onClick={()=>setLauncher(0)} 
              className ={launcher === 0 ? "active-num" : ""}
              >1</span>
              <span onClick={()=>setLauncher(1)} 
              className ={launcher === 1 ? "active-num" : ""}
              >2</span>
              <span onClick={()=>setLauncher(2)} 
              className ={launcher === 2 ? "active-num" : ""}
              >3</span>
            </div>
            <div className="tech-content">
              <div className="tech-title">{techTitle}</div>
              <div className="tech-header">{techHeader}</div>
              <p className="tech-explanation">{techExplanation}</p>
            </div>
          </div>
        })}
      </div>
     </div>
  )
}

