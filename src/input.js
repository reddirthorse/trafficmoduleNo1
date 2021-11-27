import React from "react";

const Input = ({name,type,placeholder,value,onChange}) =>{
    return(
        
            <div>
                <input name = {name} type = {type} placeholder = {placeholder} value = {value} onChange = {onChange} ></input>
            </div>
            
        
    )
}
export default Input;