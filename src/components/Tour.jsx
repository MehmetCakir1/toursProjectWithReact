import { useState } from "react";
import "../App.css";

const Tour = ({ tour ,removeTour}) => {
  console.log(tour);
  // console.log(Array.isArray(tour));

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  

  return (
    <div>
      {tour.map((item) => {
        // console.log(item);
        const { id, name, info, image, price } = item;
        return (
          <div key={id} className="container main-container mt-3 p-1 d-flex justify-content-between align-items-center flex-column">
            <div className="mt-3 box p-3 rounded-3">
              <div className="imgDiv text-center">
                <img className=" rounded-3" src={image} alt={name} />
              </div>
              <div className=" header d-flex justify-content-between align-items-center m-auto mt-2">
                <h3 className="fs-5 p-1">{name}</h3>
                <h3 className="price text-danger p-1 fs-5">$ {price}</h3>
              </div>
              {show ? (
                <div className="info m-auto">{info.slice(0, 200)}... <button onClick={handleClick}  className="border-0 fs-6 text-primary bg-white">Read More</button> </div>
              ) : (
                <div className="info m-auto">{info} <button onClick={handleClick}  className="border-0 bg-white fs-6 text-primary">Show Less</button></div>
              )}
              <div className="text-center mt-3">
                <button className="bg-danger text-light rounded-3 p-1 notInterested" onClick={()=>removeTour(id)}>Not Interested</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tour;
