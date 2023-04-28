// Children in JSX
import React,{Component} from "react";
import  ReactDOM  from "react-dom";

class College extends Component{
  render(){
    return <div>
      <h1>{this.props.children}</h1>
      {/* This will return the data that is stored between the tags of college */}
      {/* We can also put there any expression like arithmatic expression or calculation */}
    </div>
  }
}

ReactDOM.render(<College>This is children in jsx</College>,document.getElementById('root'));