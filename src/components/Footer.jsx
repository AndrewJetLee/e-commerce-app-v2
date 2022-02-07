import styled from "styled-components";
import {
  Facebook,
  LinkedIn,
  GitHub,
  MailOutline,
  Phone,
  Room,
  ArrowForward,
} from "@mui/icons-material/";
import { mobile, tablet } from "../responsive";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Top>
        <Subscribe>
          <SubscribeText>LAST CHANCE TO WIN OUR DISCOUNT!</SubscribeText>
          <SubscribeInput placeholder="Enter your email..." />
          <SubscribeButton>
            SUBSCRIBE
            <ArrowForward className="arrowRightIcon" />
          </SubscribeButton>
        </Subscribe>
        <Socials>
          <SocialsText>SOCIAL NETWORKS</SocialsText>
          <SocialWrapper>
            <Facebook className="socialIcon" />
          </SocialWrapper>
          <SocialWrapper>
            <GitHub className="socialIcon" />
          </SocialWrapper>
          <SocialWrapper>
            <LinkedIn className="socialIcon" />
          </SocialWrapper>
          <SocialWrapper>
            <MailOutline className="socialIcon" />
          </SocialWrapper>
        </Socials>
      </Top>
      <Bottom>
        <Left>
          <Logo>AJL.</Logo>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum is simply dummy text of industry lorem ipsum is
            simply dummy typesetting text.
          </Description>
        </Left>
        <Center>
          <Column>
            <Title>CATEGORIES</Title>
            <Links>
              <Link onClick={() => navigate("/products/new")}>New</Link>
              <Link onClick={() => navigate("/products/mens")}>Mens</Link>
              <Link onClick={() => navigate("/products/womens")}>Womens</Link>
              <Link onClick={() => navigate("/products/streetwear")}>Streetwear</Link>
              <Link onClick={() => navigate("/products/accessories")}>Accessories</Link>
            </Links>
          </Column>
          <Column>
            <Title>CUSTOMER</Title>
            <Links>
              <Link>My Account</Link>
              <Link onClick={() => navigate("/cart")}>Cart</Link>
              <Link>Wishlist</Link>
              <Link>Returns</Link>
              <Link>Terms</Link>
            </Links>
          </Column>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room className="contactIcon" /> <span>Dallas Texas</span>
          </ContactItem>
          <ContactItem>
            <Phone className="contactIcon" /> <span>+1 671 646 7876</span>
          </ContactItem>
          <ContactItem>
            <MailOutline className="contactIcon" />{" "}
            <span>andrewjetlee@gmail.com</span>
          </ContactItem>
          <Payment>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
          </Payment>
        </Right>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: white;
  color: black;
  margin-top: 0; 
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  border-bottom: 1px solid rgb(80, 80, 80, 0.6);
  ${tablet({
    padding: "30px",
    flexDirection: "column"
  })};
`;

const Subscribe = styled.div`
  position: relative;
`;
const SubscribeText = styled.span`
  margin-right: 20px;
  font-size: 14px;
  ${tablet({
    display: "none",
  })};
`;
const SubscribeInput = styled.input`
  background-color: white;
  padding: 8px;
  font-size: 12px;
  width: 300px;
  color: inherit;
  :focus {
    color: inherit;
  }
  ${tablet({
    marginBottom: "10px",
  })};
  ${mobile({
    width: "90vw",
  })};
`;
const SubscribeButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 12px;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  .arrowRightIcon {
    font-size: 14px;
    margin-left: 5px;
  }
`;
const SocialsText = styled.span`
  margin-right: 15px;
  font-size: 14px;
  position: relative;
  bottom: 2px;
  ${tablet({
    display: "none",
  })};
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 200px;
  position: relative;
  bottom: 0;
  ${tablet({
    padding: "30px",
  })};
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  ${mobile({ display: "flex", flexDirection: "column", textAlign: "center",
   })};
`;

const Logo = styled.h1`
  font-size: 32px;
  position: relative;
  top: -12px;
`;

const Description = styled.p`
  margin-top: 2px;
  width: 70%;
  font-size: 14px;
  ${mobile({ width: "100%", marginBottom: "20px" })};
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
`;
const SocialWrapper = styled.div`
  .socialIcon {
    margin-right: 8px;
    transition: all 0.167s ease;
    cursor: pointer;
    font-size: 16px;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  ${mobile({ marginBottom: "10px" })};
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  ${mobile({ textAlign: "center",
    flexDirection: "column" })};
`;

const Column = styled.div`
  flex: 1;
  ${mobile({ marginBottom: "20px" })};
  
`;

const Links = styled.ul`
  font-size: 14px;
`;

const Link = styled.li`
  padding-bottom: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  ${mobile({ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" })};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  .contactIcon {
    margin-right: 5px;
  }
`;

const Payment = styled.div`
  img {
    height: 22px;
  }
`;
