import React from 'react'
import data from '../../pages/destination/data-dest.json'
import { useParams } from 'react-router-dom';

const Dest = () => {
    const { name } = useParams()
    const match = data.find(e => e.name === name)
    return (
        <>
            {Array(match).map((item, index) => {
                const { name, content, distance, travelTime } = item;
                return <div key={index} >
                    <h1>{name}</h1>
                    <p>{content}</p>
                    <span className="line-dest"></span>
                    <div className="travelInfo">
                        <div className='distance'>
                            <p>AVG. DISTANCE</p>{distance}
                        </div>
                        <div className='time'>
                            <p>Est. travel time</p>{travelTime}
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}

export default Dest
