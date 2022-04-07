import React from "react";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { Technology } from "./pages/technology/Technology";
import { NotFound } from "./pages/notFound/NotFound";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
