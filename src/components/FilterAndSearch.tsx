import React from "react";
import styled from "styled-components";
import SearchIconPng from "../images/search-icon.png";

const FilterAndSearch = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
  `;
  const AddFilter = styled.select`
    border: none;
    padding: 16px;
    width: 132.49px;
    height: 49px;
    color: #c4c4c4;
    &:focus {
      outline: none;
    }
  `;

  const SearchBoxDiv = styled.div`
    position: relative;
  `;

  const SearchBoxInput = styled.input`
    width: 819.51px;
    height: 49px;
    border: none;
    background-color: #fcfafa;
    padding-left: 40px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  `;

  const SearchIcon = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 10;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  `;

  return (
    <Container>
      <AddFilter>
        <option selected disabled value="add">
          Add Filter
        </option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </AddFilter>
      <SearchBoxDiv>
        <SearchIcon src={SearchIconPng}></SearchIcon>
        <SearchBoxInput placeholder="Search for a student by name or email"></SearchBoxInput>
      </SearchBoxDiv>
    </Container>
  );
};

export default FilterAndSearch;
