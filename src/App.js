import { useState } from "react";
import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Navbar
          title="Sumit Kumar"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <TextForm text="Type here" mode={mode} />}
      {/* <Router>
        <Navbar
          title="Sumit Kumar"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/"
              component={() => <TextForm text="Type here" mode={mode} />}
            />
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
