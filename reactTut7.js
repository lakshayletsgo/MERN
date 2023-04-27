// // States(Changing dynamic values)
// import React,{Component} from "react";
// import  ReactDOM  from "react-dom";


// class Employee extends Component{
//   constructor(props){
//     super(props);
//     this.state  ={
//       name:this.props.name,
//       count : this.props.count,
//       msg:this.props.msg,
//     };
//     this.buttonClick = this.buttonClick.bind(this);
//     // Isse voh function bind hoga(iska matlab voh replace hoga) varna yeh nahi likhege toh uske saath hi aata rahega 
//   }
// buttonClick(){
//   let count = this.state.count;
//   // Yeh toh bas hamne number ke liye kiya hai ham baaki ke saath bhi kar skte hai 

//   // Jaise idhar maine msg ko change kar diya if-else loop laga ke 
//   // Isme yeh buttonClick function run hota rahega baar baar
//   let msg = this.state.msg;
//   if(count===1){
//     msg="Kyu daba raha hai "
//   }else if(count===2){
//     msg="Mat daba yaar"
//   }else if(count===3){
//     msg = "Matlab pakka deet hai "
//   }else if(count===4){
//     msg="Tereko bhai ki kasam hai "
//   }else if(count===5){
//     msg="Yeh last baar bol rha hu"
//   }else{
//     msg = "Bhai terese bada deet nahi dhekha"
//   }
//   this.setState({count:++count});//Isse value increment kar rhe hai 
//   this.setState({msg:msg});
// }
//   render(){
//     return <div>
//       <h1>{this.state.name}, This side</h1>
//       <h1>You have clicked this button this times:{this.state.count} </h1>
//       <button onClick={this.buttonClick}>Click Me</button> 
//       <h1>{this.state.msg}</h1>
//       {/* Yeh buttonClick function throw karega */}
//     </div>
//   }
// }

// ReactDOM.render(<Employee name="Lakshay" count="0" msg="Yeh button mat dabaio"/>,document.getElementById('root'));