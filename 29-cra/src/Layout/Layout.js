const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>HEADER</h1>
      </header>
      <div>{children}</div>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Layout;
