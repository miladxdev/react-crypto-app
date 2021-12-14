import "./styles.css";
import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route path="/coins/:id">
          <CoinPage />
        </Route> */}
      </Switch>
    </div>
  );
}
