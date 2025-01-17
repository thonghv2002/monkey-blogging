import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }

  .heading {
    font-size: 60px;
    font-weight: bold;
  }

  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 4px;
    font-weight: 600;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to={"/"} className={"logo"}>
        <img srcSet="/public/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="heading">Oops! Page Not Found</h1>
      <NavLink to={"/"} className={"back"}>
        Go back to home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
