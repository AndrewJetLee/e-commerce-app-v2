import styled from "styled-components";
import {
  Facebook,
  LinkedIn,
  GitHub,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material/";
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AJL.</Logo>
        <Socials>
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
      </Left>
      <Center>
        <Title>Info</Title>
        <Links>
          <Link>Home</Link>
          <Link>Cart</Link>
          <Link>Streetwear</Link>
          <Link>Denim</Link>
          <Link>Accessories</Link>
          <Link>My Account</Link>
          <Link>Order Tracking</Link>
          <Link>Wishlist</Link>
          <Link>Returns</Link>
          <Link>Terms</Link>
        </Links>
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
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 40px;
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Socials = styled.div`
  display: flex;
`;
const SocialWrapper = styled.div`
  .socialIcon {
    margin-right: 8px;
    transition: all 0.167s ease;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const Center = styled.div`
  flex: 1;
`;

const Links = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Link = styled.li`
  padding-bottom: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .contactIcon {
    margin-right: 5px;
  }
`;
