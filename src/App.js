import "./styles.css";
import Home from "./pages/home/index";
import { Provider } from "react-redux";
import store from "./core/redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trending from "./pages/Trending";
// import Testing from "./pages/testing";
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/trending" component={Trending}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
