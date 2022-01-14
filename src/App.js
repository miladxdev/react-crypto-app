import "./styles.css";
import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/coins/:id">
          <CoinPage />
        </Route>
      </Switch>
    </div>
  );
}
