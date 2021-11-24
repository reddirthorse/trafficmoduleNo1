
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Traffic from './Traffic'

function App() {
  let [trafficData, setTrafficData] = useState([]);
  const url = 'http://data.ex.co.kr/openapi/odhour/trafficTimeByRoute?key=6844121548&type=json&startUnitCode=101&endUnitCode=115'
  
  const getTraffic = async() =>{
    try{
      const res = await axios.get(url);
      const data = res.data.list
      setTrafficData(data)
      console.log(data)
    }catch{
      console.log("err")
    }
  }

  useEffect( ()=>{
    getTraffic()
    
  },[]);
  
  return(
    <div>
      
      <Traffic trafficData = {trafficData}/>
    </div>
    
      
      // {/*  */}
    // </main>
    
  )

  


  
}

export default App;
