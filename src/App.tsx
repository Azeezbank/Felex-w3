import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  //State management
  const handleDec = (e: any) => {
    e.preventDefault();
    setCount((dec) => dec - 1);
  };
  const handleInc = (e: any) => {
    e.preventDefault();
    setCount((inc) => inc + 1);
  };

  //Props example
  const Name: React.FC<any> = ({ surname }) => {
    return (
      <>
        <h5>Hello! {surname}</h5>
      </>
    );
  };

  // JSX Example
  const fullname = <h5>Bankole Azeez Babatunde</h5>;

  // COMPONENTS (Functional and class)
  // Functional example
  const Greeting = () => {
    return (
      <>
        <p>Weldone Banky! This is a functional components</p>
      </>
    );
  };
  // Class components
  class Greeting1 extends React.Component {
    render() {
      return <p>Weldone Banky! This is a Class components</p>;
    }
  };

  // event handler
  function handleClick() {
    alert('Button clicked')
  };

  return (
    <>
    <h1>Welcome to week three FLEXISAF frontend internship assignment</h1>
      {/* Virtual DOM */}
      <h3>VIRTUAL DOM</h3>
      <p>
        The virtual DOM is a lightweight representation of the actual DOM. It
        allows the react to efficiently update the user interface by:
      </p>
      <ol>
        <li>Keeping a copy of DOM in memory</li>
        <li>
          It helps in coparing the updated virtual with the previous version to
          detect change.
        </li>
        <li>Updating only the changed part of the actual DOM</li>
      </ol>
      {/* State examples */}
      <h3>STATE</h3>
      <p>
        State is an object holding a dynamic data anf determines the behaviour
        of a react components. it's local to a componebt and can change over
        time.
      </p>
      <h5>Key points</h5>
      <ol>
        <li>
          Managed using useState in functional component and this.state in cass
          components.
        </li>
        <li>Updating state trigger re-render of the component</li>
      </ol>
      <h4>Example</h4>
      <button type="button" onClick={handleDec}>
        Decrease
      </button>
      <strong>{count}</strong>
      <button type="button" onClick={handleInc}>
        Increase
      </button>
      {/* Props examples */}
      <h3>PROPS</h3>
      <p>
        Props (in short means properties) are used to pass data from parent
        components to child components
      </p>
      <h5>Key points</h5>
      <ol>
        <li>Props are read-only and immutable</li>
        <li>They allow components to be reuseable and confogurable</li>
      </ol>
      <h4>Example</h4>
      <Name surname={"Banky"} />
      {/* JSX */}
      <h3>JSX (JavaScript XML)</h3>
      <p>
        JSX is a syntax extension in JavaScript that allow to write HTML code
        inside JavaScript. It makes code easier to write and read
      </p>
      <h5>Key points</h5>
      <ol>
        <li>JSX gets transpiled to JavaScript founctions</li>
        <li>You can embed JavaScript expression using {}.</li>
      </ol>
      <h4>Example</h4>
      {fullname}
      {/* COMPONENTS (Functional and class) */}
      <h3>COMPONENTS (Functional and class)</h3>
      <p>Components are the building block of react apllication</p>
      {/* Functional components example */}
      <Greeting />
      {/* Class component exmaple */}
      <Greeting1 />
      {/* Lifecycle components */}
      <h3>LIFECYCLE COMPONENTS</h3>
      <p>
        This are special function that runn during diffrence stage of components
        life.
      </p>
      <h5>Phases</h5>
      <ol>
        <li>
          Mounting: when a components is added to the DOM (ComponentDidMount)
        </li>
        <li>Updating: when state/props change (ComponentDidUpdate)</li>
        <li>Unmounting: when a component is removed (ComponentWilUnmount)</li>
      </ol>
      {/* Fragment */}
      <h3>Fragment</h3>
      <p>
        This is used to wrap multiple elements without adding extra nodes to the
        DOM.
      </p>
      <h4>Example</h4>
      <>
        <h5>Hello</h5>
        <p>This is a paragraph.</p>
      </>

      {/* Use of eventHandler with react */}
      <h3>Eent handler with react</h3>
      <p>Event handler helpes to respond to user interaction like click, keyPress or form submission.</p>
      <h5>Key points</h5>
      <ol>
        <li>use camelCase for the event name (e.g, onClick)</li>
        <li>Pass a function reference to handle the event</li>
      </ol>

      <h4>Example</h4>
      <button type="button" onClick={handleClick}>Click me</button>

      {/* Link to the github repository */}
      <h2>To access the github repository</h2>
      <p><a href="">Click here</a></p>
    </>
  );
};

export default App;