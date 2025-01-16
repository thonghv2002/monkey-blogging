import PropTypes from "prop-types";
import styled from "styled-components";

const AuthenticationStyles = styled.div`
  min-height: 100vh;

  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: 500;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }

  .have-account {
    margin-bottom: 20px;
    a {
      color: ${(props) => props.theme.primary};
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
    }
  }
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationStyles>
      <div className="container">
        <img
          srcSet="/public/logo.png 2x"
          alt="monkey-blogging"
          className="logo"
        />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenticationStyles>
  );
};

AuthenticationPage.propTypes = {
  children: PropTypes.node,
};

export default AuthenticationPage;
