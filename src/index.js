import React from "react";
import { exampleIIHOC } from "./ExampleHOC";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";

/*
    index.js
*/

import { Button } from "./Components/Button/Button";
import { Input, Card } from "./Components";
import { RoutingExample } from "./RoutingExample";

// const Example = () => (
//   <>
//     <Input />
//     <Card />
//     <Button />
//   </>
// );

// ReactDOM.render(<Example />, document.getElementById("root"));

/*

    HOCs

*/

// const WrappedExample = exampleIIHOC(Example)

// const SecondLevel = () => <div>Second Level</div>

// const FirstLevel = () => <SecondLevel />

// class ClassExample extends React.Component {
//   render() {
//     return (
//       <>
//         <button>First level button</button>
//         <FirstLevel />
//       </>
//     );
//   }
// }
//  const WrappedExample = exampleIIHOC(ClassExample)

// ------ Routing example

ReactDOM.render(<Router ><RoutingExample/></Router>, document.getElementById("root"));
