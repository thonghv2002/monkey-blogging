import PropTypes from "prop-types";
import styled from "styled-components";
import LoadingSpinner from "../loading";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0px 25px;
  line-height: 1;
  color: white;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  height: ${(props) => props.height || "66px"};
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
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
  children,
  ...props
}) => {
  const { isLoading } = props;
  const child = isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button" | "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};

export default Button;
