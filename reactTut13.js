// Component Mounting Process
import React,{Component} from "react";
import ReactDOM  from "react-dom";
import CousinsB from "./CousinsB";

// Sabse pehle constructor call hua hai uske baad getDerivedStateFromProps call hoga uske baad render function call hoga uske baad componentDidMount call hoga

// Sabse pehle child ke saare function call hoge uske baad componentDidMount call hoga parent ka 
class Cousins extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      // names:['Madhav','Manav','Shubham','Chinu']
    }
    console.log("Cousins Constructor is called");
  
  }

  // It creates a virtual DOM which is created after the entire code is run 
  componentDidMount(){
    console.log("Cousins componentDidMount called")
  }
  static getDerivedStateFromProps(props,state){
    console.log("Cousins getDerivedStateFromProps Calling")
    return null;
  }

  
  render(){
    console.log("Cousins render function called!");
    return <div>
      <h1>This is the list of my cousins</h1>
      <h1>Value of count is: {this.state.count}</h1>
      <CousinsB/>
    </div>
  }
}

ReactDOM.render(<Cousins/>,document.getElementById('root'));




// CousinsB
// import React,{Component} from "react";
// import ReactDOM from "react-dom";

// class CousinsB extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             name:"Lakshay",
//         }
//         console.log('CousinsB constructor called');
//     }
//     componentDidMount(){
//         console.log("CousinsB componentDidMount called!");
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log("CousinsB getDerivedStateFromProps called");
//         return null;
//     }
//     render(){
//         return<div>
//             <h1>This is CousinsB</h1>
//         </div>
//     }
// }
// ReactDOM.render(<CousinsB/>,document.getElementById('root'));
// export default CousinsB;