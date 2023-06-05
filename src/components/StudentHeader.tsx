import React, { useState } from "react";
import styled from "styled-components";
import StudentAddModal from "./StudentAddModal";

const StudentHeaderBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1040px;
  height: 69px;
  padding: 14px 0 14px 16px;
`;

const Students = styled.div``;

const ButtonDiv = styled.div``;

const ExportBtn = styled.button`
  width: 113px;
  height: 41px;
  background: none;
  border: none;
  color: #509cdb;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const AddBtn = styled.button`
  width: 113px;
  height: 41px;
  background-color: #509cdb;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

interface props {
  goToAddModal: () => void;
}

const StudentHeader = ({ goToAddModal }: props) => {
  return (
    <StudentHeaderBox>
      <Container>
        <Students>Students</Students>
        <ButtonDiv>
          <ExportBtn>Export CSV</ExportBtn>
          <AddBtn onClick={goToAddModal}>Add Student</AddBtn>
        </ButtonDiv>
      </Container>
    </StudentHeaderBox>
  );
};

export default StudentHeader;
