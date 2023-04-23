import React from "react";
import ReactDOM  from 'react-dom';
import Footer from "./footer"; //This is to use the file we created
import Header from "./Header"; //Isme dono file me bas functional component or ek me class component likha hai 

// There are two types of components 
// 1. Functional Component 
// 2. Class Component

// 1. Functional Component
function Headers(){
  return <h1>This is functional component</h1>;
}
//OR
const Header2 = ()=>{
  return <h1>This is 2nd type of functional component</h1>
} 


// 2. Class Component
class Header3 extends React.Component{
  render(){
    return <h1>This is class component</h1> //Agr isme class name likhe toh (class=)  karke mat likhio (className=)aise likhio 
  }
}

ReactDOM.render(<Header3/>,
    // <Header2/>,
    // <Header1/>,
  document.getElementById('root')
);

// TO use the file imported we have to define thme in a function and then include that function like this 
function Content(){
  return(
  <div>
    <Header/>
    <Footer/>
  </div>);
}
ReactDOM.render(<Content/>,
document.getElementById('root'));