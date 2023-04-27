// Fragments
import React,{Component} from "react";
// Isme bas Component likhne ka use yeh hai ki baar baar React.Component nahi likhna nahi padega
// Seedha Component se kaam ho jayega 

import ReactDom from "react-dom";
// Jab bhi code kare toh dhyaan rkhio ki space kaise deni hai 
// Faltu ka space error dega 

// class Employee extends Component{
//   render(){
//     return<div>
//       {/* Idhar iss wale div ke andar saara saman aayega par agr hame usse main wale div ke andar chahiye toh ham Fragments ka use karte hai  */}
//       <h1>Kya haal hai bhai k?</h1>
//       <h1>Badia sab?</h1>
//     </div>
//   }
// }

// Like this 
class Employee extends Component{
  render(){
    return<React.Fragment>
      {/* Ab agr isme bhi bas fragment likhna hai toh usko bhi upar component ke saaath likh de */}
      {/* Ham iske andar child elements bhi rkh skte hai jaise  */}
      {/* <Example/>  */}
      {/* Isko bhi iske andar rkh skte hai */}
      <h1>Kya haal hai bhai k?</h1>
      <h1>Badia sab?</h1>
    </React.Fragment>
  }
}

ReactDom.render(<Employee/>,document.getElementById('root'));