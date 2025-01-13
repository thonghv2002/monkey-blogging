import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.grayDark};
  font-weight: 500;
  cursor: pointer;
`;

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
