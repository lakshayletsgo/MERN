// Passing Arguements to Event Handlers
import React, { Component } from "react";
import ReactDOM from "react-dom";


class Employee extends Component {

    state = {
        author: "Lakshay",
        count: "10",
    }

    // Agr idhar ham arrow function use nahi karte hai toh error throw karega 
    // Ya toh isko bind kar de ya toh arrow function bana
    buttonClicked = (p, e) => {
        console.log("Button is clicked" + p);
        console.log(e);
        console.log(this.state.author);
    }

    // Isme bas super ki tarah hi kara hai ek function dusre ko call kar rha hai 

    buttonClickedSuper = (e) => {
        this.buttonClicked("lakshay clicked it ", e);
        console.log("This is super of buttonClicked")
        // console.log(e);
    }
    render() {
        return <div>
            <h1>Kya haal hai bhai ke </h1>
            <h1>This is second heading</h1>
            <button onClick={this.buttonClickedSuper}>Click Me</button>

            {/* These both are same  */}
            {/* <button onClick={(e)=>{ this.buttonClicked("lakshay clicked it ",e);}}>Click Me</button> */}


            {/* These both are also same
            // Bind function me ham e nahi pass karte voh automatically hota hai store pehle se  */}
            {/* <button onClick={this.buttonClicked.bind(this,"Lakshay clicked it ")}>Click Me</button> */}


        </div>
    }
}

ReactDOM.render(<Employee />, document.getElementById('root'));