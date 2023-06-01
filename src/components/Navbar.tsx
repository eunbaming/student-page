import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const Container = styled.div`
    display: flex;
    justify-content: flex-end;
  `;
  const Alarm = styled.div`
    width: 24px;
    height: 24px;
    // border: 1px solid red;
    margin-top: 31px;
    text-align: center;
    line-height: 24px;
  `;
  const LoginLogout = styled.div`
    width: 120px;
    height: 40px;
    // border: 1px solid red;
    text-align: center;
    line-height: 40px;
    font-weight: 600;
    font-size: 14px;
    margin: 19px 69px 0 0;
  `;
  const Bell = styled(FontAwesomeIcon)``;

  return (
    <Container>
      <Alarm>
        <Bell icon={faBell as IconProp} />
      </Alarm>
      <LoginLogout>Login</LoginLogout>
    </Container>
  );
};

export default Navbar;
