import styled from "styled-components";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const InputStyles = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid #999999;
  }

  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-place-holder {
    color: #84878b;
  }

  .icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="icon"> {children}</div> : null}
    </InputStyles>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
  control: PropTypes.object,
};

export default Input;
