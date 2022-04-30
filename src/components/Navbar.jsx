import styled, { css } from "styled-components";
import { ShoppingCartOutlined, Search } from "@mui/icons-material/";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logout } from "../redux/userSlice";
import { setActiveTab } from "../redux/navSlice";
import {
  FacebookOutlined,
  LinkedIn,
  GitHub,
  Email,
} from "@mui/icons-material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const favoritesQuantity = useSelector((state) => state.cart.favorites);
  const activeTab = useSelector((state) => state.nav.activeTab);
  const user = useSelector((state) => state.user.currentUser);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products/search/?q=${query}`);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleClickTab = (e) => {
    dispatch(setActiveTab(e.target.getAttribute("name")));
    const tab = e.target.getAttribute("name"); 
    if (tab === "home") navigate("/"); 
    if (tab === "new") navigate("/products/13500"); 
    if (tab === "sale") navigate("/products/28235"); 
    if (tab === "mens") navigate("/products/27110"); 
    if (tab === "womens") navigate("/products/27108"); 
    if (tab === "blogs") navigate("/products/13500"); 
    if (tab === "contact") navigate("/products/13500"); 
  };

  return (
    <Container>
      <Content>
        <Top>
          <TopWrapper>
            <Socials>
              <FacebookOutlined className="social icon facebook"></FacebookOutlined>
              <LinkedIn className="social icon linkedin"></LinkedIn>
              <GitHub className="social icon github"></GitHub>
              <Email className="social icon email"></Email>
            </Socials>
            <Account>
              <PersonIcon className="account icon person" />
              My Account
              <KeyboardArrowDownIcon className="account icon down" />
            </Account>
          </TopWrapper>
        </Top>
        <Middle>
          <Left>
            <Logo src="/logo.png" onClick={() => navigate("/")} />
          </Left>
          <Center>
            <SearchBar>
              <button onClick={handleSubmit}>
                <Search className="navbarSearchIcon" />
              </button>
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search for products and more"
                onKeyPress={handleKeypress}
              />
            </SearchBar>
          </Center>
          <Right>
            <Register onClick={() => navigate("/register")}>REGISTER</Register>
            {user ? (
              <SignOut
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                SIGN OUT
              </SignOut>
            ) : (
              <SignIn onClick={() => navigate("/login")}>SIGN IN</SignIn>
            )}

            <VerticalSeparator></VerticalSeparator>
            <Favorite>
              <FavoriteBorderIcon className="favorite icon"></FavoriteBorderIcon>
              <Badge>{favoritesQuantity}</Badge>
            </Favorite>
            <Cart onClick={() => navigate("/cart")}>
              <ShoppingCartOutlined className="cart icon" />
              <Badge>{cartQuantity}</Badge>
            </Cart>
          </Right>
        </Middle>
        <Bottom>
          <Tabs onClick={handleClickTab}>
            <Tab activeTab={activeTab} name="home">
              HOME
            </Tab>
            <Tab activeTab={activeTab} name="about">
              ABOUT US
            </Tab>
            <Tab activeTab={activeTab} name="new">
              NEW COLLECTION
            </Tab>
            <Tab activeTab={activeTab} name="sale">
              SALE
            </Tab>
            <Tab activeTab={activeTab} name="mens">
              MENSWEAR
            </Tab>
            <Tab activeTab={activeTab} name="womens">
              WOMENSWEAR
            </Tab>
            <Tab activeTab={activeTab} name="blogs">
              LATEST BLOGS
            </Tab>
            <Tab activeTab={activeTab} name="contact">
              CONTACT US
            </Tab>
          </Tabs>
        </Bottom>
      </Content>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ height: "50px" })};
`;

const Content = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  ${mobile({ padding: "10px 0" })};
`;

const Top = styled.section`
  display: flex;
  width: 100%;
  background-color: #bd9a58e1;
  height: 35px;
  color: white;
  justify-content: center;
`;

const TopWrapper = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 4px;
    cursor: pointer;
  }
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  .icon {
    margin: 0 4px;
  }
`;

const Middle = styled.section`
  display: flex;
  justify-content: space-between;
  width: 85%;
  padding: 20px 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  object-fit: cover;
  ${mobile({
    height: "30px",
    width: "30px",
  })};
`;
const SearchBar = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 50px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  margin-right: auto;
  ${mobile({
    height: "32px",
    marginLeft: "10px",
  })};

  input {
    width: 100%;
    border: none;
    padding: 4px;
    font-size: 16px;
    ${mobile({ fontSize: "13px" })};
    ::placeholder {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
  }
  button {
    background-color: transparent;
    .navbarSearchIcon {
      margin-top: 4px;
      margin-left: 8px;
      font-size: 25px;
      cursor: pointer;
      ${mobile({ fontSize: "18px" })};
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  .favorite {
    margin-left: 20px;
    cursor: pointer;
  }
`;

const Register = styled.button`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  padding: 5px;
  ${mobile({ fontSize: "12px", margin: "0 4px" })};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;

const SignIn = styled(Register)`
  ${mobile({ fontSize: "12px", margin: "0 4px" })};
`;

const SignOut = styled(SignIn)``;

const Cart = styled(Register)`
  display: flex;
  align-items: center;
  margin-left: 15px;
  position: relative;
  ${mobile({ fontSize: "12px", margin: "0 4px" })};
  .icon {
    margin-left: 4px;
  }
`;

const Favorite = styled(Cart)`
  margin: 0;
`;

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  background-color: #bd9a58e1;
  right: 0;
  top: 0;
  color: white;
  font-size: 10px;
`;

const VerticalSeparator = styled.span`
  width: 1px;
  height: 32px;
  background: #2b2b29;
`;

const Bottom = styled.section`
  display: flex;
  align-items: center;
  border-top: solid 1px lightgray;
  width: 100%;
  justify-content: center;
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-weight: 500;
  width: 85%;
`;

const Tab = styled.li`
  padding: 12px;
  border: solid 3px rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: color 0.167s ease-in-out, border-bottom 0.167s ease-in-out;
  ${(props) =>
    props.activeTab === props.name &&
    css`
      color: #bd9a58e1;
      border-bottom: solid 3px #bd9a58e1;
    `}
  :hover {
    color: #bd9a58e1;
  }
`;
