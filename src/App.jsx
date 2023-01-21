import Heading from "./components/Heading";
import Note from "./components/Note";
import Footer from "./components/Footer";
var React = require("react");

function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />

      {/* <h1>React </h1>
      <p>
        Design simple views for each state in your application, and React will
        efficiently update and render just the right components when your data
        changes. Declarative views make your code more predictable and easier to
        debug.
      // </p> */}
      <Footer />
    </div>
  );
}

export default App;
