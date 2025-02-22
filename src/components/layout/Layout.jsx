import PropTypes from "prop-types";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
