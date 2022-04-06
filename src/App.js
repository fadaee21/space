import React from "react";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { Technology } from "./pages/technology/Technology";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
