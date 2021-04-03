import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import useResolved from "./hooks/useResolved";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Chat from "./components/Chat/Chat";

function App() {
  const history = useHistory();
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? "/" : "login");
    }
  }, [authResolved, authUser, history]);

  useEffect(() => {
    console.log(authUser, authResolved);
  }, [authUser, authResolved]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
