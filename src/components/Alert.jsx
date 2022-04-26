import React from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Alert = ({ type, message }) => {
  return <Container>{ type === "success" ? <CheckCircleOutlineIcon/> : <ErrorOutlineIcon/>} <p>{message}</p></Container>;
};

export default Alert;

const Container = styled.div`
  padding: 15px; 
`