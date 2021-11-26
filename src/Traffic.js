import React, { useState, useEffect } from 'react';
import axios from "axios";

const Traffic = (props) =>{
    const data = props.trafficData
    console.log(props)

    function timeCal(t){
        let minutes = 0;
        let hour = 0;
        if (3600 > t ){
            minutes = parseInt(t/60)
            return `${minutes}분` 
        }
        else if (t>=3600){
            hour = parseInt(t/3600)
            minutes = parseInt((t - hour*3600)/60)
            return `${hour}시간 ${minutes}분`
        }
    }
    

    

    return(
        <div>
            {}
            {data
            .filter((d)=>d.startUnitCode ===`${props.start} ` && d.endUnitCode ===`${props.end} ` && d.carType ==='1')
            .map((d,cnt)=>{
                return(
                <div className = "traffic">
                <div className="sumTm">측정시간:{data[cnt].sumTm[0]}{data[cnt].sumTm[1]}:{data[cnt].sumTm[2]}{data[cnt].sumTm[3]}</div>
                <div className="carType">차종:{data[cnt].carType}</div>
                <div className="startUnitName">시작지점:{data[cnt].startUnitName}</div>
                <div className="endUnitName">종료지점:{data[cnt].endUnitName}</div>
                <div className="timeAvg">평균시간:{timeCal(data[cnt].timeAvg)}</div>
                <div className="timeMax">최대시간:{timeCal(data[cnt].timeMax)}</div>
                <div className="timeMin">최저시간:{timeCal(data[cnt].timeMin)}</div>
                </div>
                )
            })}
        </div>
    )
}


export default Traffic;

