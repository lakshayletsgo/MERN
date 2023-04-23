// Jsx 
// Jsx is just used to simplify the code if we don't use jsx the code will be more complicated and difficult to understand 
// If we create a element like this 
// const name = "<h1>My name is lakshay</h1>" 
// We have to pass it like this 
// ReactDOM.render(name,
//     document.getElementById('root'));
// Else if it is a component then we have to pass it normally

// We can even pass the class name or id to the element within the element and do the css using it 
// const name = "<h1 className="Name">My name is lakshay</h1>" 

// And if don't use the jsx we have to write it like this
// In this first is the tag and second is the className or id of the tag and third is the value in it
// const name = React.createElement("h1",null,"Lakshay")
// And if there is a dynamic variable we pass it after the value, dynamic means=(${name})
// const name = React.createElement("h1",null,"Lakshay",name)

// We can use all other types of value similarly 
// like we can pass the objects using dynamic value and other className as well