import "./App.css";
import Buttons from "./components/buttons/Button";
import { ButtonGetStart } from "./components/buttons/Button";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Product</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
      <Buttons title="login" color="blue" />
      <Buttons title="Register" />
      <Buttons title="New Account" />
      <Buttons></Buttons>
      <ButtonGetStart />
    </>
  );
}

export default App;
