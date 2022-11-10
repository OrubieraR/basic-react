import Header from "./Header";

const Layout = ({ title, children }) => (
  <div>
    <Header />
    <main>
      <h2>{title}</h2>
      <section>{children}</section>
    </main>
    <footer>Copyright</footer>
  </div>
);

export default Layout;
