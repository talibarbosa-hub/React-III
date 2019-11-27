import React, {Component, Fragment} from "react";
import Button from "./Button/Buttons.js"


export default class Contador extends Component{
    constructor(props) { 
        super(props)
        this.state = {
            click : 0
        }
    }

    clickAdd =()=> this.setState({click: this.state.click+1})
    clickSub =()=> this.setState({click: this.state.click-1})
   

    render(){
        return(
            <Fragment>
                <h1>Contador:<span class="contador">{this.state.click}</span> </h1>
            <Button classe="btns" onClick={this.clickAdd}>+</Button>
            <Button classe="btns" onClick={this.clickSub}>-</Button>
            
            </Fragment>
        )
    }
    


    // function ContaClick(){
    //     this.setState() 
    // }




}
