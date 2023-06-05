import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StudentHeader from "../components/StudentHeader";
import styled from "styled-components";
import FilterAndSearch from "../components/FilterAndSearch";
import NoStudent from "../components/NoStudent";
import StudentList from "../components/StudentList";
import StudentAddModal from "../components/StudentAddModal";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
interface BodyProps {
  modal: boolean;
}
const BlackScreen = styled.div<BodyProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: #0000002c;
`;

const StudentPage = () => {
  const [modal, setModal] = useState(false);
  const goToAddModal = () => {
    setModal(true);
  };

  return (
    <Container>
      {modal && <BlackScreen modal />}
      {modal && <StudentAddModal />}
      <Navbar />
      <StudentHeader goToAddModal={goToAddModal} />
      <FilterAndSearch />
      {/* <NoStudent /> */}
      <StudentList />
    </Container>
  );
};

export default StudentPage;
