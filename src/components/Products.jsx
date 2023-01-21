import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Title1 = styled.h1`

justify-content: center;
display: flex;
    margin-bottom: 20px;
`;


const Products = () => {
  return (
    <div>
      <Title1>Products</Title1>
    <Container>
       
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </div>
  );
};

export default Products;
