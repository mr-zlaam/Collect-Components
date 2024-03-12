import "./App.scss";
import {
  DropDown,
  NavLink,
  Navbar,
  NavbarLinksWrapper,
  NavbarLogo,
} from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="maindiv">
      <Navbar>
        <NavbarLogo />
        <NavbarLinksWrapper>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <DropDown>
            <NavLink>App Develovpment</NavLink>
            <NavLink>Web Develovpment</NavLink>
          </DropDown>
          <NavLink>Contact</NavLink>
        </NavbarLinksWrapper>
      </Navbar>
    </div>
  );
}

export default App;
