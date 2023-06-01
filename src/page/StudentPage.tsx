import React from "react";
import Navbar from "../components/Navbar";
import StudentHeader from "../components/StudentHeader";
import styled from "styled-components";
import FilterAndSearch from "../components/FilterAndSearch";

const StudentPage = () => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
  `;

  return (
    <Container>
      <Navbar />
      <StudentHeader />
      <FilterAndSearch />
    </Container>
  );
};

export default StudentPage;
