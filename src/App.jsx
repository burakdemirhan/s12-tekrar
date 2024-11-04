import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect />
      </Switch>
    </AuthProvider>
  );
}

export default App;
