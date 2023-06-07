import React, { useRef, useState } from "react";
import styled from "styled-components";
import BlankIMG from "../images/blank-profile-picture.webp";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  z-index: 30;
  min-width: 969px;
  width: 65vw;
  height: 85vh;
  background-color: #fff;
  box-sizing: border-box;
`;
const Modal = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;
const AddStudentsH2 = styled.h2`
  font-size: 32px;
  font-weight: 600;
`;
const StudentAddForm = styled.form`
  display: flex;
  margin-top: 30px;
`;
const LeftArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const NameDiv = styled.div``;
const InfoLabel = styled.span`
  color: #8a8a8a;
  font-size: 14px;
  font-weight: 500;
`;
const InfoInput = styled.input`
  width: 310px;
  height: 42px;
  border: 1px solid #a7a7a7;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
`;
const ClassGenderInput = styled.div`
  display: flex;
`;
const StudentImgContainer = styled.div``;
const StudentImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;
const StudentImgInput = styled.input`
  display: none;
`;
const RightArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 20px;
  position: relative;
`;
const InfoSelect = styled.select`
  width: 144px;
  height: 42px;
  margin: 0 0 20px 0;
  border-color: #a7a7a7;
  border-radius: 4px;
  color: #a7a7a7;
`;
const AddButton = styled.button`
  position: absolute;
  bottom: -80px;
  right: 0;
  width: 131px;
  height: 41px;
  border: none;
  background-color: #f1f1f1;
  border-radius: 4px;
  color: #4f4f4f;
  font-size: 14px;
  font-weight: 600;
`;

const StudentAddModal = () => {
  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<any>();
  const [imageUrl, setImageUrl] = useState<any>(BlankIMG);

  const onClickImg = () => {
    imgInputRef.current?.click();
  };

  const ImageOnload = (event: any) => {
    if (!event.target.files) {
      return;
    }
    if (event.target.files[0]) {
      setImageFile(event.target.files[0]);
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImageUrl(reader.result || null);
          resolve();
        };
      });
    }
  };

  return (
    <Container>
      <Modal>
        <AddStudentsH2>Add Students</AddStudentsH2>
        <StudentAddForm>
          <LeftArea>
            <NameDiv>
              <InfoLabel>Name</InfoLabel>
              <InfoInput />
            </NameDiv>
            <StudentImgContainer>
              <StudentImg src={imageUrl} onClick={onClickImg} />
              <StudentImgInput
                type="file"
                accept="images/*"
                ref={imgInputRef}
                onChange={ImageOnload}
              />
            </StudentImgContainer>
          </LeftArea>
          <RightArea>
            <ClassGenderInput>
              <InfoSelect style={{ marginRight: "20px" }}>
                <option value="1학년">1학년</option>
                <option value="1학년">2학년</option>
                <option value="1학년">3학년</option>
              </InfoSelect>
              <InfoSelect>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </InfoSelect>
            </ClassGenderInput>
            <InfoLabel>Email address</InfoLabel>
            <InfoInput />
            <InfoLabel>Phone number</InfoLabel>
            <InfoInput />
            <InfoLabel>Password</InfoLabel>
            <InfoInput />
            <AddButton>Add Student</AddButton>
          </RightArea>
        </StudentAddForm>
      </Modal>
    </Container>
  );
};

export default StudentAddModal;
