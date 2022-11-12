import Header from "./Header";

const Layout = ({ title, children, ...props }) => (
  <div>
    <Header {...props} />
    <main>
      <h2>{title}</h2>
      <section>{children}</section>
    </main>
    <footer>Copyright</footer>
  </div>
);

export default Layout;
