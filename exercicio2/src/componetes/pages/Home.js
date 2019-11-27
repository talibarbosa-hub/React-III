import React, {Fragment} from "react";
import Input from "../input/Input"
import Button from "../Button/Button";

class Home extends React.Component {
    constructor(){
        super();
        this.state ={
            value:"",
            nomes: [ 
                "Talita",
                "Bruna",
                "Raissa"
                ]
        }
    }
   onChangeInput=(element)=>{
           let value = element.target.value
             this.setState({value:value})
        }
    addItem=(nome)=>{
       this.setState({
         nomes: [
             this.state.value,          
             ...this.state.nomes        //spread Operator pega item por item e adiciona o novo ao que já tem dependendo de onde estamos colocando o spreed ele retorna emcima ou embaixo
            ]  
            //let nome="Reprograma"
            // this.setState[{nomes:["Reprograma", ...this.state.nomes]}]
       })
    }
     
      
    removeItem =()=>{
        console.log(cliquei)
    }

    

render(){
    return (
        <Fragment>
                <Input
                for="Usuário"
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
                change={this.onChangeInput}>
                </Input>
                <p>{this.state.value}</p>
                <Button
                // children="Cadastrar"
                click={this.addItem}> Cadastrar
                </Button>
                <ul>
                    {this.state.nomes.map((itemdoArray,indexDoMap) => {
                    return(
                    <Fragment key={indexDoMap}>
                    <li>{value}</li>
                    <Button click={()=>this.removeItem}>x</Button>  
                    </Fragment>
                    )})}
                </ul>
        </Fragment>
            
        )
    }
}

    


//key precisa estar sempre no primeiro elemento do map

export default Home;