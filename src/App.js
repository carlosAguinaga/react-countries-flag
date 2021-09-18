import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Search from "./views/Search";
import NotFound from "./views/NotFound";
import Detail from "./views/Detail";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} exact />
            <Route path="/detail/:id" component={Detail} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
