// import objects from React modules 
/* 
'react' is the module, React is the object we're importing from the module.
We need to import React because Babel implicitly calls (references) React 
i.e. React.createElement when it compiles JSX code. 
*/
import React from 'react'; 
import ReactDOM from 'react-dom'; // to render elements from the virtual DOM into the real DOM

const element = <h1>Hello World</h1>; // defining an element
/* 
in real world applications, you won't render elements just like that, you'll be rendering App
components.
*/
console.log(element); // logging element onto the console
ReactDOM.render(element, document.getElementById('root')); 
// ReactDOM gets a reference of 'element' and renders it inside the element referenced in the second parameter

/* Pressing pause here. Gotta go learn JavaScript first hahaha */