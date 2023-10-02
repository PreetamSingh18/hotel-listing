import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faBath,
  faBed,
  faBuilding,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HotelCard = (props) => {
  const { val } = props;
  return (
    <Link to={`/property/${val.id}`}>
      <div className="Card">
        <div className="Card-Images">
          <img src={val.image} />
        </div>
        <div className="Card-Body">
          <div className="hotel-location">
            <h5>
              <FontAwesomeIcon icon={faLocationDot} /> {val.address}
            </h5>
          </div>
          <div className="hotel-name">
            <h3>{val.name}</h3>
          </div>
          <div className="hotel-facility">
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
          <div className="hotel-details">
            <div>
              <h4>
                <span>&#8377;{val.price}</span>/month
              </h4>
            </div>
            <div>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
     </Link>
  );
};

export default HotelCard;
