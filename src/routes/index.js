import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import SingleBlog from "../pages/SingleBlog";
const Routes = ({ theme }) => (
  <Switch>
    <Route exact path="/">
      <Home theme={theme} />
    </Route>
    <Route path="/about">
      <About theme={theme} />
    </Route>
    <Route path="/blog" exact>
      <Blog theme={theme} />
    </Route>
    <Route path="/blog/:id">
      <SingleBlog theme={theme} />
    </Route>
  </Switch>
);

export default Routes;
