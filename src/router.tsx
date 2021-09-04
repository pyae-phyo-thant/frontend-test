import { Switch, Route, BrowserRouter } from "react-router-dom";
import WorkDetails from "./components/works/WorkDetails";
import Works from "./components/works/Works";

const Router = () => {
  // const work = `work?tag=${tagName}`

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/work" component={Works} />
        <Route exact path="/work/ocbc-pay-anyone" component={WorkDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
