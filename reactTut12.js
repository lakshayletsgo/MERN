// Rendering an array of data using map
import React,{Component} from "react";
import ReactDOM  from "react-dom";

class Cousins extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      names:['Madhav','Manav','Shubham','Chinu']
    }
  }
  render(){
    return <div>
      <h1>This is the list of my cousins</h1>
      <h1>Value of count is: {this.state.count}</h1>
      <h1>Name of my cousins are:</h1>
      <ul>

        {/* This to print all the values of array
        It is like for each loop 
        If we don't pass the index in the key then it will throw error in console
        Pass the key in the outer tag  */}
        {this.state.names.map((name,index)=>(
          <h2 key={index}><li >{name}</li></h2>
        ))}

          {/* This will also print the value  */}
        <li>{this.state.names[2]}</li>
      </ul>
    </div>
  }
}

ReactDOM.render(<Cousins/>,document.getElementById('root'));