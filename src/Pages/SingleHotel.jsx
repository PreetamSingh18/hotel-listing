import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import HotelData from "../hotel.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowsUpDownLeftRight,
  faBath,
  faBed,
  faBuilding,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const SingleHotel = () => {
  const {id}=useParams();
  const history=useNavigate();
  const NewData = HotelData.filter((hotel) => {
    return hotel.id == id;
  });
  console.log(NewData[0]);
  return (
    <div className='SingleHotel-Container'>
    <button onClick={()=>{history(-1)}}><FontAwesomeIcon icon={faArrowLeft}/> Back</button>
    {
    <div className='SingleBox'>
      {/* <div className='SingleBox-Image'> */}
        <img src={NewData[0].image}/>
      {/* </div> */}
     <div className='SingleBox-Body'>
       <h3>{NewData[0].name}</h3>
       <div className="SingleBox-location">
            <h5>
              <FontAwesomeIcon icon={faLocationDot} /> {NewData[0].address}
            </h5>
          </div>
       <div className="SingleBox-facility">
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <h6>3 Room</h6>
            </div>
            <div>
              <FontAwesomeIcon icon={faBed} />
              <h6>4 Bed</h6>
            </div>
            <div>
              <FontAwesomeIcon icon={faBath} />
              <h6>1 Bath</h6>
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
              <h6>732 sft</h6>
            </div>
          </div>
          <div className='Price'>
              <h4>
                <span>&#8377;{NewData[0].price}</span>/month
              </h4>
            </div>
     </div>
      
    </div>
    }

    </div>
  )
}

export default SingleHotel;