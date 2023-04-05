import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about/About";
import Calk from "./calc/Calk";
import Contact from "./conatct/Contact";
import Busines from "./for-busines/Busines";
import Home from "./home/Home";
import Products from "./product/Products";
import ServiseSentr from "./servise/ServiseSentr";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/busines">
        <Busines />
      </Route>
      <Route path="/servissentir">
        <ServiseSentr />
      </Route>
      <Route path="/calk">
        <Calk />
      </Route>
    </Switch>
  );
};

export default Routes;
