import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Summary from "./Pages/Summary/Summary";
import { Container } from "react-bootstrap";
import ItemDetailed from "./Pages/ItemDetailed/ItemDetailed";
import CreateMaterial from "./Pages/CreateMaterial/CreateMaterial";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Switch>
            <Route exact path="/item/:id" component={ItemDetailed} />
            <Route exact path="/create-item" component={CreateMaterial} />
            <Route exact path="/" component={Summary} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
