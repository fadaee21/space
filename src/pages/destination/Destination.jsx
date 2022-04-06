import React
, { useState }
  from 'react'
import { NavLink } from 'react-router-dom'
import './destination.style.css'

import Dest from '../../components/dest/Dest'

import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import data from './data-dest.json'


export const Destination = () => {

  const [travel, setTravel] = useState("moon")

  return (
    <div className='background-dest'>
      <div className="part1-dest">
        <p> <span>01</span> Pick your destination</p>
        <div className={`img ${travel}`}></div>
        <div className="part2-dest">
          <ul className='nav-dest'>
            {data.map((item) => { 
              const {id,name} = item
              return <li key={id} >  <NavLink to={`/destination/${name}`} onClick={() => setTravel(name)} >{name}</NavLink> </li>
             })}
          </ul>
          <Switch>
            <Route path="/destination/:name" component={Dest} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

