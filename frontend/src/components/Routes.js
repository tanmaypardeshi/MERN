import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostList from "./PostList";
import PostCreate from "./PostCreate";
import PostDetail from "./PostDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/create" component={PostCreate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
