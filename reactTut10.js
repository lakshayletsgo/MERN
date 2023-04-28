// Update Details using state
import React,{Component} from "react";
import  ReactDOM  from "react-dom";

class Doctor extends Component{


  // We have to use the props that why we have used the constructors 
  constructor(props){
    super(props);
    this.state={
      name: this.props.name,
      age:this.props.age,
    }
  }

    // In this we have changed the info and updated it 
    // Isme pehle hamne data liya state se uske baad jiski value update karani hai bas uski value daal do 
  buttonClicked=()=>{
    let name= this.state.name;
    // let age= this.state.age;
    this.setState({
      name:name, //name ki value same rahegi 
      age:30,  //Jaise age ki value change karni hai toh age ki value jo change karke dalni hai voh kardi 
    });
  }
  render(){
    return <div>
      <h1>Doctor name is :{this.state.name}</h1>
      <h1>Age of the doctor is :{this.state.age}</h1>
      <button onClick={this.buttonClicked}>Update Info</button>
    </div>
  }
}

// Ham props me voh value denge jo pehle display hogi phir change hongi
ReactDOM.render(<Doctor name="Rahul" age={20}/>,document.getElementById('root'));