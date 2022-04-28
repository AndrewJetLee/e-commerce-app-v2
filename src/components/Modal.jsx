import styled from "styled-components"

const Modal = ({status, type}) => {
  return (
    <Container>Modal</Container>
  )
}

export default Modal

const Container = styled.div`
  position: absolute; 
  top: 0; 
  right: 0;
  left: 0; 
  bottom: 0; 
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  z-index: 10000;
  display: flex;
  justify-content: center;
`