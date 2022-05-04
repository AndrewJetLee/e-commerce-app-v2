import React from "react";
import styled, { css } from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Alert = ({ type, message, status }) => {
  return (
    <Container type={type} status={status}>
      {type === "success" ? (
        <CheckCircleOutlineIcon className="check icon" />
      ) : (
        <ErrorOutlineIcon className="error icon" />
      )}
      <span>{message}</span>
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  padding: 8px 14px; 
  position: fixed;
  top: 160px;
  right: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  background-color: ${(props) => (props.type === "success" ? "#019267" : "#B20600")};
  font-size: 15px;
  color: white;
  border-radius: 1px;
  .icon {
      margin-right: 8px;
  }
  .check {
    color: white;
  }
  .error {
    color: white;
  }
  transition-property: opacity, transform;
  transition-duration: 0.2s;
  opacity: 0;
  ${(props) =>
    props.status &&
    css`
      opacity: 1;
      transform: translateY(40px);
    `}
`;
