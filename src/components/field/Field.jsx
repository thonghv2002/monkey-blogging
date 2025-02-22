import PropTypes from "prop-types";
import styled from "styled-components";

const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

Field.propTypes = {
  children: PropTypes.node,
};

export default Field;
