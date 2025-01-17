import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import LoadingSpinner from "../loading";
import { NavLink } from "react-router-dom";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0px 25px;
  line-height: 1;
  color: white;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: white;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  height: ${(props) => props.height || "66px"};
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

/**
 * @requires
 * @param {string} type Type of button 'button' or 'submit'
 * @returns
 */
const Button = ({
  type = "button",
  onClick = () => {},
  kind = "secondary",
  children,
  ...props
}) => {
  const { isLoading, to } = props;
  const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} style={{ display: "inline-block" }}>
        <ButtonStyles type={type} kind={kind} {...props}>
          {child}
        </ButtonStyles>
      </NavLink>
    );
  }
  return (
    <ButtonStyles type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button" | "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  kind: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
