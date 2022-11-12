import Button from "../common/Button";
import { logout } from "../auth/service";

const Header = ({ onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <header>
      <div></div>
      <nav>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </nav>
    </header>
  );
};

export default Header;
