import React from "react";
import styled, { css } from "styled-components";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Alert = ({ type, message, status }) => {
  return <Container status={status}>{ type === "success" ? <CheckCircleOutlineIcon className="check icon"/> : <ErrorOutlineIcon className="error icon"/>} <p>{message}</p></Container>;
};

export default Alert;

const Container = styled.div`
  padding: 5px;
  width: 200px; 
  position: fixed; 
  top: 80px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  .check {
      color: green;
  }
  .error {
      color: red; 
  }
  transition-property: opacity, transform; 
  transition-duration: 0.2s; 
  opacity: 0; 
  ${props => props.status && css`
    opacity: 1;
    transform: translateY(40px);
  `}
`