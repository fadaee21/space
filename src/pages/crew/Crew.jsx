import React, { useState, useEffect } from 'react'
import './crew.style.css'
import { Header } from '../../components/header/Header'
import data from './data-crew.json'
export const Crew = () => {
  const [slide, setSlide] = useState(0)
  const astronaut = data[slide]
  console.log(slide)
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      slide === 3
        ? setSlide(0)
        : setSlide((count) => count + 1)
    }, 3000);
    const stopper = document.querySelector(".crew-content")
    const handleAlert = () => { return clearTimeout(slideTimer) }
    stopper.addEventListener("mouseenter", handleAlert)
    return () => clearTimeout(slideTimer)
  })

  return (
    <div className='background-crew'>
      <div className="container">
        <Header />
        <div className="crew">
          <div className="crew-p">
            <span>02</span>
            <p>Meet your crew</p>
          </div>
          {[astronaut].map((person) => {
            const { title, name, explanation, id, image } = person;
            return (
              <div key={id} className="crew-content">
                <img className='crew-img' src={image} alt={name} />
                <div className="dotdot">
                  <span onClick={() => setSlide(0)}
                    className={slide === 0 ? "active" : ""}></span>
                  <span onClick={() => setSlide(1)}
                    className={slide === 1 ? "active" : ""} ></span>
                  <span onClick={() => setSlide(2)}
                    className={slide === 2 ? "active" : ""} ></span>
                  <span onClick={() => setSlide(3)}
                    className={slide === 3 ? "active" : ""}></span>
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

