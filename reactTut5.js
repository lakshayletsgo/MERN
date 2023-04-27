// // Props Types
// // Properties are like dynamic value
// // PropTypes are used so that when dynamic values are put we can put some conditions
// import React,{Component} from "react";
// // Here component is used so that we don't have to write it again and again while rendering a component
// import ReactDOM  from 'react-dom';
// import PropTypes from 'prop-types';

// class Employee extends Component{
//   render(){
//     return <h1>My name is: {this.props.name}</h1>
//   }
// }
// Employee.propTypes={
//   name:PropTypes.string //Ab voh error toh throw karega but screen par nahi dhikhiga
//   // Error console me aayega
// }

// ReactDOM.render(<Employee name="10291"/>,document.getElementById('root'));