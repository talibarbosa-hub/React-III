import React from "react";
import "./input.css"

//const Input = (props) => <input></input>

const Input =(props) => {
   
                return(
                  <div>
                    <label for={props.for}>{props.label}<input onChange={props.change}type={props.type} placeholder={props.placeholder}></input></label>
                    </div>
                )
}
export default Input;
