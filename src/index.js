import React from "react";
// import { exampleIIHOC } from "./ExampleHOC";
import ReactDOM from "react-dom";

// /*
//     index.js
// */

// import { Button } from "./Components/Button";
// import { Input, Card } from "./Components";

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

// const WrappedExample = exampleIIHOC(Example);

// // const SecondLevel = () => <div>Second Level</div>;

// // const FirstLevel = () => <SecondLevel />;

// // class ClassExample extends React.Component {
// //   render() {
// //     return (
// //       <>
// //         <button>First level button</button>
// //         <FirstLevel />
// //       </>
// //     );
// //   }
// // }
// const WrappedExample = exampleIIHOC(ClassExample);
// ReactDOM.render(<WrappedExample />, document.getElementById("root"));

// --- Context

// import ClassicContextExample from './ClassicContextExample'
// import ContextHooksExample from './ContextHooksExample'

//  ReactDOM.render(<ClassicContextExample />, document.getElementById("root"));

// ---

// ------ Routing example

import { BrowserRouter as Router} from "react-router-dom";
import { RoutingExample } from "./RoutingExample";

ReactDOM.render(<Router ><RoutingExample/></Router>, document.getElementById("root"));
