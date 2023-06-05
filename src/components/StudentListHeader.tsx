import React from "react";
import styled from "styled-components";

const StudentListHeader = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 23px;
  `;
  const Category = styled.div`
    /* border: 1px solid red; */
    width: 865px;
    height: 48px;
    display: flex;
  `;
  const CategoryItem = styled.span`
    /* border: 1px solid blue; */
    display: inline-block;
    height: 100%;
    line-height: 48px;
    color: #424242;
    font-size: 12px;
    font-weight: 700;
  `;

  return (
    <Container>
      <Category>
        <CategoryItem style={{ flex: "1.5" }}>Name</CategoryItem>
        <CategoryItem style={{ flex: "1" }}>Student ID</CategoryItem>
        <CategoryItem style={{ flex: "1.5" }}>Email address</CategoryItem>
        <CategoryItem style={{ flex: "1" }}>Class</CategoryItem>
        <CategoryItem style={{ flex: "1" }}>Gender</CategoryItem>
      </Category>
    </Container>
  );
};

export default StudentListHeader;
