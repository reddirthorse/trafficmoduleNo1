
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Traffic from './Traffic'
import {default as Input} from './input'
import Test from './test';


function App() {
  const [trafficData, setTrafficData] = useState([]);
  const [start,setStart] = useState('101');
  const [end,setEnd] = useState('115')
  
  
  const url = `http://data.ex.co.kr/openapi/odhour/trafficTimeByRoute?key=6844121548&type=json&startUnitCode=${start}&endUnitCode=${end}`
  
  const handleChange = (e) =>{
    const {name, value} = e.target

    name ==='start'? setStart(value) : setEnd(value)
    console.log(name,value)
  }
  //  const getTraffic = async() =>{
  //    try{
  //      const res = await axios.get(url);
  //      const data = res.data.list
  //      setTrafficData(data)
  //      console.log(data)
  //    }catch{
  //      console.log("err")
  //    }
  //  }
  // const getTraffic = async function(){
  //   try{
  //     const res = await axios.get(url);
  //     const data = res.data.list
  //     setTrafficData(data)
  //     console.log(data)
  //   }catch{console.log("err")}
  // }


  // useEffect( async() =>{
  //   try{
  //     const res = await axios.get(url);
  //     const data = res.data.list

  //     setTrafficData(data)
  //     console.log(data)
  //   }catch{
  //     console.log('err')
  //   }
    
  // },[]);

  useEffect( () =>{
     try{ async function getTraffic(){
        const res = await axios.get(url);
        const data = res.data.list
        setTrafficData(data)
        console.log(data)}
        getTraffic()
        console.log(3)
    }catch{
      console.log('err')
    }
  },[url]);
 
  
  return(
    <div>
      <Input name = "start" type = "text" placeholder = "서울"  onChange = {handleChange}/>
      <Input name = "end" type = "text" placeholder = "대전"  onChange = {handleChange}/>
      <Traffic trafficData = {trafficData} start = {start} end = {end}/>
    </div>
    
      
      // {/*  */}
    // </main>
    
  )

  


  
}

export default App;
