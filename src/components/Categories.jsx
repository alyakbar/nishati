import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Containe= styled.div`
  display: flex;
  padding: 20px;
  margin-top:20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Title1 = styled.h1`

justify-content: center;
display: flex;
    margin-bottom: 20px;
`;

const Categories = () => {
  return (
    <div>
       <Title1>Categories</Title1>
    <Containe>
   
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Containe>
    </div>
  );
};

export default Categories;
