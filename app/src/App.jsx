import { useEffect } from "react";
import { Switch, Route } from "react-router";
import useAuth from "./hooks/useAuth";
import useResolved from "./hooks/useResolved";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Chat from "./components/Chat/Chat";

const App = () => {
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

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
};

export default App;
