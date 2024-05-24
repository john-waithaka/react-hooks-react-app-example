import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";

// imported test component statement
import TestComponent from "./TestComponent";



// Add your code own within the return statement
function App() {
  return (
    //jsx appears here
    <div className="App">
      <h1>

        {/* make it read Now only */}
        Now


        {/* {format(new Date(), "MMMM do yyyy, h:mm:ss a")} */}
      </h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />


      {/* import the test component first */}
      <TestComponent />
    </div>
  );
}

export default App;
