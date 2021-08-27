import "./App.css";
import Header from "./components/header/headerComponent";
import Main from "./components/main/mainComponent";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Main />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
