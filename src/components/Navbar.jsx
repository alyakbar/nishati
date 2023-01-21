
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';


const Container = styled.div`
  height: 60px;
  margin-bottom:30px;
  background-color: #E8FADD;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`

  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #E8FADD;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const list = styled.div` 
margin: 0px 30px;
align-self: center;
justify-content: center;
}

`;
const Button = styled.button`

    padding: 10px;
    background-color: #E8FADD;
    cursor: pointer;
    font-weight: 600;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
           <Logo>Nishati</Logo>
        </Left>
        <Center>
          <list>
          <Language> Home</Language>
          </list>
          <list>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon/>
          </SearchContainer>  
          </list>       
        </Center>
        <Right>
          <MenuItem><Button>Connect + </Button></MenuItem>
          <MenuItem> <ShoppingBagTwoToneIcon /></MenuItem>
          <MenuItem>

          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
