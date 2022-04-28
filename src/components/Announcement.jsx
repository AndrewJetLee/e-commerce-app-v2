import styled from "styled-components";

const Announcement = () => {
  return (
    <Container>
      <Message>Get 85% off on your first purchase!!</Message>
    </Container>
  );
};

export default Announcement;

const Container = styled.div`
  display: flex;
  background-color: #bd9a58e1;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

const Message = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 500;
`;
