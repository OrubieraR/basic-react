import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = ({ title, children, ...props }) => (
  <div className="layout">
    <Header {...props} />
    <main className="layout-main bordered">
      <Outlet />
    </main>
    <footer className="layout-footer bordered">Copyright</footer>
  </div>
);

export default Layout;
