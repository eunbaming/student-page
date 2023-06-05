import React from "react";
import styled from "styled-components";

interface props {
  item: any;
  index: number;
}

interface studentItemProps {
  index: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ListItemDiv = styled.div<studentItemProps>`
  /* border: 1px solid red; */
  display: flex;
  width: 865px;
  height: 48px;
  line-height: 48px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => (props.index % 2 === 0 ? "#EBF6FF" : "fff")};
`;
const NameDiv = styled.span`
  padding-left: 15px;
`;
const StudentIdDiv = styled.span``;
const EmailDiv = styled.span``;
const ClassDiv = styled.span``;
const GenderDiv = styled.span``;

const StudentListItem = ({ item, index }: props) => {
  return (
    <Container>
      <ListItemDiv index={index}>
        <NameDiv style={{ flex: "1.5" }}>{item.name}</NameDiv>
        <StudentIdDiv style={{ flex: "1" }}>{item.studentId}</StudentIdDiv>
        <EmailDiv style={{ flex: "1.5" }}>{item.email}</EmailDiv>
        <ClassDiv style={{ flex: "1" }}>{item.class}</ClassDiv>
        <GenderDiv style={{ flex: "1" }}>{item.gender}</GenderDiv>
      </ListItemDiv>
    </Container>
  );
};

export default StudentListItem;
