import axios from "axios";
import { useState,useEffect } from "react";
import Tour from "./Tour";
import "../App.css";
import Loading from "./Loading";

const url = 'https://course-api.com/react-tours-project';

const TourList = () => {

    const [tour,setTour]=useState([]);
    const [loading,setLoading]=useState(true);

    const getTour  = async ()=>{
    try{
        const {data} = await axios.get(url);
        setTour(data)
        setLoading(false)
        // console.log(data)
        // console.log(Array.isArray(data));
    }
    catch(error){
        console.log(error);
    }
    }

    useEffect(() => {
    getTour()
    }, [])

    const removeTour = (id)=>{
     const newList= tour.filter((item)=> item.id !==id);
     setTour(newList)
    }
    const handleRefresh = ()=>{
      getTour()

    }

  return (
    <div>
    {loading ? 
      ( <div className="loading">
        <Loading/>
        </div>)
      :
      tour.length==0 ?
        (<div className="d-flex justify-content-between align-items-center flex-column noTour">
        <h1>No Tours Left</h1>
        <button  className="bg-danger text-light rounded-3 p-2 px-4 notInterested" onClick={handleRefresh}>Refresh</button>
        </div>):
    (<div>
        <h1 className="text-center ourTours">Our Tours</h1>
        <div className="bg-danger line m-auto ourTours"></div>
        <Tour tour={tour} removeTour={removeTour}/>
    </div>)}
    </div>
  )
}

export default TourList