import { Link, NavLink } from "react-router-dom";
import Button from "../common/Button";
import { logout } from "../auth/service";
import { useAuth } from "../auth/context";

import classNames from "classnames";
import logo, { ReactComponent as Icon } from "../../assets/twitter.svg";
import "./Header.css";

const Header = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <header className={classNames("header", className)}>
      <Link to="/">
        <div className="header-logo">
          {/* <img src={logo} alt="Twitter-React" /> */}
          <Icon width="32" height="32" />
        </div>
      </Link>
      {/* <nav>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </nav> */}
      <nav className="header-nav">
        <NavLink
          to="/adverts/new"
          // className={({ isActive }) => (isActive ? 'selected' : '')}
          // style={({ isActive }) => (isActive ? { color: 'green' } : null)}
        >
          Nuevo anuncio
        </NavLink>
        |
        <NavLink
          to="/adverts"
          // className={({ isActive }) => (isActive ? 'selected' : '')}
          // style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end
        >
          Ver todos los anuncios
        </NavLink>
        {isLogged ? (
          <Button className="header-button" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button
            as={Link}
            to="/login"
            variant="primary"
            className="header-button"
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
