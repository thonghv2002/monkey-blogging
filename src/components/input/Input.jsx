import styled from "styled-components";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import IconEyeOpen from "~/icons/IconEyeOpen";

const InputStyles = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
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
`;

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={hasIcon}>
      <input id={name} type={type} {...field} {...props} />
      {hasIcon ? <IconEyeOpen className="icon-eye"></IconEyeOpen> : null}
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
