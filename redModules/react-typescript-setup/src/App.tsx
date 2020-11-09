import React from "react";
import "./App.css";
import Clock from "./components/Clock";

// two variables (testProp, optionalProp) that both have an assigned data type of string.
let testProp: string = 'Am I getting passed to the Clock component?';
let optionalProp: string = 'You sure are!';


// TypeScript does not allow function declarations to be typed (explicitly given a data type, not the action of typing).  However, they do allow arrow function expressions to be typed
// This simply defines that what we store in App has to be not only a function, but a function that qualifies as a functional component in React.
// (1):  Our arrow function expression is given the name of 'App'
const App: React.FunctionComponent = () => {
  // (2):  what follows the colon is the type that we are assigning to 'App'.  We are digging into our named import of 'React', and assigning our 'App' the type of 'FunctionComponent' (node modules -> @types packages that are installed)

  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock
          testProp={testProp}
          optionalProp={optionalProp}
        />
      </div>
    </div>
  );
};

export default App;
