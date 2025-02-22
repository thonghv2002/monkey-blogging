import styled from "styled-components";
import Button from "../button";
import { NavLink } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";

const HeaderStyles = styled.header`
  padding: 40px 0;
  .header-main {
    display: flex;
    align-items: center;
  }

  .logo {
    display: block;
    max-width: 50px;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
  }

  .search {
    margin-left: auto;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }

  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }

  /* .header-button {
    margin-left: 20px;
  }

  .header-auth {
  } */
`;
const MenuLinks = [
  { url: "/", title: "Home" },
  { url: "/blog", title: "Blog" },
  { url: "/contact", title: "Contact" },
];

const getLastName = (name) => {
  if (!name) return "User";
  const length = name.split(" ").length;
  return name.split(" ")[length - 1];
};

const Header = () => {
  const { userInfo } = useAuth();
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <NavLink to="/">
            <img
              srcSet="/public/logo.png 2x"
              alt="monkey-blogging"
              className="logo"
            />
          </NavLink>
          <ul className="menu">
            {MenuLinks.map((item, index) => (
              <li key={index} className="menu-item">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts..."
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          {!userInfo ? (
            <Button
              type={"button"}
              style={{ height: "56px" }}
              className="header-button"
              to="/sign-up"
            >
              Sign Up
            </Button>
          ) : (
            <div className="header-auth">
              <span>Welcome back, </span>
              <span className="text-primary">
                {getLastName(userInfo?.displayName)}
              </span>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
