import React, { useState, useEffect } from 'react';
import axios from "axios";

const Traffic = (props) =>{
    const data = props.trafficData
    console.log(props)
    

    return(
        <div>
            {}
            {data
            .filter((d)=>d.startUnitCode ==='101 ' && d.endUnitCode ==='115 ')
            .map((d,cnt)=>{
                return(
                <div className = "traffic">
                <div className="sumTm">측정시간:{data[cnt].sumTm[0]}{data[cnt].sumTm[1]}:{data[cnt].sumTm[2]}{data[cnt].sumTm[3]}</div>
                <div className="carType">차종:{data[cnt].carType}</div>
                <div className="startUnitName">시작지점:{data[cnt].startUnitName}</div>
                <div className="endUnitName">종료지점:{data[cnt].endUnitName}</div>
                <div className="timeAvg">평균시간:{data[cnt].timeAvg/60}분</div>
                <div className="timeMax">최대시간:{data[cnt].timeMax/60}분</div>
                <div className="timeMin">최저시간:{data[cnt].timeMin/60}분</div>
                </div>
                )
            })}
        </div>
    )
}


export default Traffic;

