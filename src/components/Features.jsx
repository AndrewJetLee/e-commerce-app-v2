import styled from "styled-components";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";

const Features = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LocalShippingOutlinedIcon className="shipping icon"/>
          <FeatureText>
            <h3>Free Shipping</h3>
            <p>Free shipping on all orders above 200$</p>
          </FeatureText>
        </Left>
        <Middle>
          <AssignmentReturnOutlinedIcon className="return icon"/>
          <FeatureText>
            <h3>90 Days Return</h3>
            <p>Simply return it within 90 days for an exchange</p>
          </FeatureText>
        </Middle>
        <Right>
          <CreditScoreOutlinedIcon className="credit icon"/>
          <FeatureText>
            <h3>100% Payment Secure</h3>
            <p>Lorem Ipsum something something</p>
          </FeatureText>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Features;

const Container = styled.section`
  height: 110px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff78;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  .icon {
      font-size: 60px;
      font-weight: 400;
      color: ${props => props.theme.colors.primary};
      margin-right: 15px;
      stroke-width: .5;
  }
`;

const FeatureText = styled.div`
    h3 {
        font-weight: 600;
    }
    p {
        font-size: 15px;
        font-weight: 500;
    }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  border-right: solid 1px lightgrey;
  padding: 18px 70px;
  align-items: center;
`;

const Middle = styled(Left)`
`;

const Right = styled(Left)`
  border-right: none;
`;
