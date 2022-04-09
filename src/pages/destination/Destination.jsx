import React
, {
  useEffect,
  useState
}
  from 'react'
import { NavLink } from 'react-router-dom'
import './destination.style.css'

import Dest from '../../components/dest/Dest'

import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import data from './data-dest.json'
import { Header } from '../../components/header/Header'


export const Destination = () => {

  const [imageName, setImageName] = useState("moon")
  const imageSource = (data.find(e => e.name === imageName)).image
  const history = useHistory()
  useEffect(() => {
    history.push('/destination/moon')
  }, [])

  return (
    <div className='background-dest'>
      <div className="container">
        <Header />
        <div className="position-dest">
          <div className="part1-dest  ">
            <p> <span>01</span> Pick your destination</p>
            <img className='img' src={imageSource} alt="" />
          </div>
          <div className="part2-dest ">
            <ul className='nav-dest'>
              {data.map((item) => {
                const { id, name } = item;
                return <li key={id} >  <NavLink to={`/destination/${name}`} onClick={() => setImageName(name)} >{name}</NavLink> </li>
              })}
            </ul>
            <Switch>
              <Route path="/destination/:name" component={Dest} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

