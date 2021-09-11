import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/search' component={Search} exact/>
          <Route path='/detail/:id' component={CountryDetail} exact/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
