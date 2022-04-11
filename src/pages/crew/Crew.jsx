import React, { useState, useEffect } from 'react'
import './crew.style.css'
import { Header } from '../../components/header/Header'
import data from './data-crew.json'
export const Crew = () => {
  const [slide, setSlide] = useState(0)
  const astronaut = data[slide]
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      slide === 3
        ? setSlide(0)
        : setSlide((count) => count + 1)
    }, 6000);
    const stopper = document.querySelector(".crew-content")
    const handleAlert = () => { return clearTimeout(slideTimer) }
    stopper.addEventListener("mouseenter", handleAlert)
    return () => clearTimeout(slideTimer)
  })

  return (
    <div className='background-crew'>
      <div className="container">
        <Header />
        {[astronaut].map((person) => {
          const { title, name, explanation, id, image } = person;
          return (
            <div className='crew-content-image'>
              <div className="crew">
                <div className="crew-p">
                  <span>02</span>
                  <p>Meet your crew</p>
                </div>
                <div key={id} className="crew-content">
                  <div className="dotdot">
                    <span onClick={() => setSlide(0)}
                      className={slide === 0 ? "activeDot" : ""}></span>
                    <span onClick={() => setSlide(1)}
                      className={slide === 1 ? "activeDot" : ""} ></span>
                    <span onClick={() => setSlide(2)}
                      className={slide === 2 ? "activeDot" : ""} ></span>
                    <span onClick={() => setSlide(3)}
                      className={slide === 3 ? "activeDot" : ""}></span>
                  </div>
                  <div className="title">{title} </div>
                  <div className="name">{name}</div>
                  <p className="explanation">{explanation}</p>
                </div>
              </div>
              <div className="crew-p-mobile">
                <span>02</span>
                <p>Meet your crew</p>
              </div>
              <div className='crew-img' >
                <img src={image} alt={name} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

