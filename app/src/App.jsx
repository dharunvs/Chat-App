import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Chat from "./components/Chat/Chat";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
