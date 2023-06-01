import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentHeader from "./components/StudentHeader";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import StudentPage from "./page/StudentPage";

function App() {
  const Container = styled.div`
    display: flex;
    /* width: 1400px; */
  `;
  return (
    <Container>
      <SideBar />
      <StudentPage />
    </Container>
  );
}

export default App;
