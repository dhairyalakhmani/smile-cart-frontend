import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import ProductList from "components/ProductList";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import "./App.css";

const App = () => (
  <>
    <div className="flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/" />
      <NavLink exact activeClassName="underline font-bold" to="/product" />
    </div>
    <Switch>
      <Route exact component={ProductList} path={routes.products.index} />
      <Route exact component={Product} path={routes.products.show} />
      <Redirect exact from={routes.root} to={routes.products.index} />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
