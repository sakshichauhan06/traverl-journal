import React from 'react'

export default function Main(props) {
    return (
        <div className='card'>
            <div className='left'>
                <img src={`${props.imageUrl}`} alt='' className='country-photo'></img>
            </div>
            <div className='right'>

                <div className='location-div'>
                    <div className='country-div'>
                        <div className='location-logo'></div>
                        <div className='country-name'>{props.title}</div>
                    </div>
                    <div className='google-maps'>
                        <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                    </div>
                </div>

                <div className='title'>
                    {props.title}<br></br>
                </div>
                <div className='date'>
                    {props.startDate} - {props.endDate}
                </div>

                <div className='description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}