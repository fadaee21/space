import React, { useState } from 'react'
import './crew.style.css'
import { Header } from '../../components/header/Header'
import data from './data-crew.json'
import image from '../../assets/crew/image-douglas-hurley.png'
export const Crew = () => {
  const [slide, setSlide] = useState(0)
  console.log(slide)
  const astronaut = data[slide]
  return (
    <div className='background-crew'>
      <div className="container">
        <Header />
        <div className="crew">
          <div className="crew-p">
            <span>02</span>
            <p>Meet your crew</p>
          </div>
          <div className="crew-img" 
          style={{backgroundImage: `url(${process.env.PUBLIC_URL + '../../assets/crew/image-douglas-hurley.png'})` }}
          ></div>

{console.log(image)}


          {[astronaut].map((person) => {
            console.log(person)
            const { title, name, explanation, id } = person;
            return (
              <div key={id} className="crew-content">
                <div className="dotdot">
                  <span onClick={()=>setSlide(0)}  className='active'></span>
                  <span onClick={()=>setSlide(1)} ></span>
                  <span onClick={()=>setSlide(2)} ></span>
                  <span onClick={()=>setSlide(3)} ></span>
                </div>
                <div className="title">{title} </div>
                <div className="name">{name}</div>
                <p className="explanation">{explanation}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

