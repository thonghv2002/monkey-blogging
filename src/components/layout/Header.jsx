import styled from "styled-components";

const HeaderStyles = styled.header``;
const MenuLinks = [
  { url: "/#", title: "Home" },
  { url: "/#", title: "Blog" },
  { url: "/#", title: "Contact" },
];
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="/public/logo.png 2x" alt="monkey-blogging" />
          </a>
          <ul className="menu"></ul>
          {MenuLinks.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
