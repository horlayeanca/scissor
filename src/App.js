import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import { Redirect } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
// import Urls from "./components/Urls";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/analytics"
              component={() => {
                const { user } = UserAuth();
                if (!user) {
                  return <Redirect to="/login" />;
                } else {
                  return <Analytics />;
                }
              }}
            >
              <Route path="/analytics" component={Analytics} />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/urls" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
