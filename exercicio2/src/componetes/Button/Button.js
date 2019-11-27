import React from "react";

const Button =(props)=>{
    console.log(props)
    return(
        <button onClick={props.click}>{props.children}</button>
    );
}

export default Button;