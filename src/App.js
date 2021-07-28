import "./App.css";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Product} />
          <Route path="/page/:pageNumber" component={Product} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
