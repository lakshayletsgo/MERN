// Handling Events 
import React from "react";
import  ReactDOM  from "react-dom";

class Employee extends React.Component{
  // buttonClicked(){
  //   alert("Hello");
  //   // Agr ham bas isko run kar denge toh alert prompt aayega aur link khul jayega 
  //   // Agr hame bas alert prompt dhekna hai aur redirect nahi karna toh ham ek edit karege like this 
  // }

  // To use states in this we have to use constructors
  constructor(props){
    super(props);
    // Isse ham jo pehle se hi values hai usko bula rhe hai

    this.state={
      count:this.props.count,
    }
    // this.buttonClicked= this.buttonClicked.bind(this);
  }
  // We don't have to write bind function if we use the arrow function 
  buttonClicked=()=>{
    let count = this.state.count;
    this.setState({
      count: ++count,
    })
  }

  render(){
    return<div>
      <h1>K hai </h1>
      <h1>Count number: {this.state.count}</h1>
      {/* <a href="https://www.youtube.com" onClick={this.buttonClicked}>Click here</a> */}
      <button onClick={this.buttonClicked}>Don't Click Here</button>
    </div>
  }
}

ReactDOM.render(<Employee count="0"/>,document.getElementById('root'));