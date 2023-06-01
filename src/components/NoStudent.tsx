import React from "react";
import styled from "styled-components";
import NoStudentPNG from "../images/no-search.png";

const NoStudent = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
  `;
  const NoStudentsDiv = styled.div`
    width: 952px;
    height: 419px;
    background-color: #fcfafa;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const NoStudentImg = {
    width: "310px",
    heigjt: "225px",
  };
  const NoStudentH2 = styled.h2`
    margin: 0;
    color: #4f4f4f;
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
  `;
  const Explanation = styled.p`
    margin: 0;
    margin-top: 5px;
    font-size: 14px;
    line-height: 17px;
  `;

  return (
    <Container>
      <NoStudentsDiv>
        <img src={NoStudentPNG} style={NoStudentImg} alt="" />
        <NoStudentH2>No students at this time</NoStudentH2>
        <Explanation>
          Students will appear here after they enroll in your school.
        </Explanation>
      </NoStudentsDiv>
    </Container>
  );
};

export default NoStudent;
