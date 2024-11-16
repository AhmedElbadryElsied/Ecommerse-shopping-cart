import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import CategoryCard from "../category/categoryCard";
import product1 from "../../imgs/product1.jpeg";
import product2 from "../../imgs/product2.jpeg";
import product3 from "../../imgs/product3.jpeg";
import product4 from "../../imgs/product4.jpeg";
import product5 from "../../imgs/product5.jpeg";
import product6 from "../../imgs/product6.jpeg";

function HomeCategory() {
  return (
    <div>
      <Container>
        <SubTitle title="التصنيفات" btnTitle="المزيد" />

        <Row className="my-2 d-flex justify-content-between">
          <CategoryCard title={"منتجات"} img={product1} background={"#000"} />
          <CategoryCard title={"منتجات"} img={product2} background={"#000"} />
          <CategoryCard title={"منتجات"} img={product3} background={"#000"} />
          <CategoryCard title={"منتجات"} img={product4} background={"#000"} />
          <CategoryCard title={"منتجات"} img={product5} background={"#000"} />
          <CategoryCard title={"منتجات"} img={product6} background={"#000"} />
        </Row>
      </Container>
    </div>
  );
}

export default HomeCategory;
