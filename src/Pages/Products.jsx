import React, { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import hotelData from "../hotel.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHourglass, faHourglass1 } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  // console.log(hotelData);
  const CityName=["London", "Paris","Mumbai","New York"];
  const [city, setCity] = useState("London");
  const [data, setData] = useState([]);
  const [count,setCount]=useState(6);
  const handleCity = (val) => {
    setCity(val);
    for(let i=0;i<CityName.length;i++){
        if(CityName[i]==val){
            document.getElementById(val).style.backgroundColor="#3939df";
            document.getElementById(val).style.color="white";
        }
        else{
            document.getElementById(CityName[i]).style.backgroundColor="#d4d4ed";
            document.getElementById(CityName[i]).style.color="black";
        }
    }
    setCount(6);
  };
 console.log(count);
  const handleShowMore=()=>{
    setCount(count+3);
  }

  useEffect(() => {
    const NewData = hotelData.filter((hotel) => {
      return hotel.location == city;
    });

    setData(NewData);
  }, [city]);
  

  return (
    <div>
      <div className="Container">
        <div className="Box-Heading">
          <h3>Featured Listed Property</h3>
          <p>
            Real estate can be bought , sold , leased, or rented,and can be a value investment opportunity . The Value of real estate can be ....
          </p>
        </div>
        <div className="Products-Box">
          <div className="Feature-Box">
            <div className="Filter-Box">
              <button className="btn" id="New York" onClick={() => handleCity("New York")}>
                New York
              </button>
              <button className="btn" id="Mumbai" onClick={() => handleCity("Mumbai")}>
                Mumbai
              </button>
              <button className="btn" id="Paris" onClick={() => handleCity("Paris")} >
                Paris
              </button>
              <button className="btn btn1" id="London" onClick={() => handleCity("London")}>
                London
              </button>
            </div>
            <div>
              <button className="ViewAll-Btn">View All <FontAwesomeIcon icon={faArrowRight}/> </button>
            </div>
          </div>
          <div className="AllProducts">
            {data && data.slice(0,count).map((val, ind) =><HotelCard key={ind} val={val}/>)}
          <button className={data.length>count?"ShowBtn":"HideBtn"} onClick={handleShowMore}><FontAwesomeIcon icon={faHourglass1}/> Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
