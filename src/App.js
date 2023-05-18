import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
