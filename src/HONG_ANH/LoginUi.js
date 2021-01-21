import React, { useState } from "react";
import styled from "styled-components";
import { CircleLoading } from "./CircleLoading";
import { BORDER_COLOR, COLOR_THEME, GREY_BACKGROUND } from "./const";
import { FetchApi } from "./FetchApi";
import { MainLayout } from "./MainLayout";
import { PrimaryBtn } from "./PrimaryBtn";

const userNameField = "username";
const passwordField = "password";

export const LoginUi = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [isUserNameErr, setIsUserNameErr] = useState(false);
  const [isPasswordErr, setIsPasswordErr] = useState(false);
  const [submitErr, setSubmitErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  let textTogglePass = "Show password?";
  if (showPass) {
    textTogglePass = "Hide password?";
  }

  function handleOnChange({ field, e }) {
    const valueInput = e.target.value;
    if (field === userNameField) {
      setUserName(valueInput);
    }
    if (field === passwordField) {
      setPassWord(valueInput);
    }
  }

  async function handleLogin() {
    if (!userName) {
      setIsUserNameErr(true);
      if (!password) {
        setIsPasswordErr(true);
      }
      return;
    }
    if (!password) {
      setIsPasswordErr(true);
      return;
    }
    const body = {
      username: userName,
      password: password,
    };
    setIsLoading(true);
    try {
      const res = await FetchApi({
        url: "/auth",
        method: "POST",
        body: body,
      });
      console.log("res", res);
      setIsLoading(false);
      localStorage.setItem("isLogined", true);
      window.location.href = "/";
    } catch (e) {
      setIsLoading(false);
      setSubmitErr("User name dose not exist!");
    }
  }

  function handleOnFocus({ field }) {
    setSubmitErr("");
    if (field === userNameField) {
      setIsUserNameErr(false);
    }
    if (field === passwordField) {
      setIsPasswordErr(false);
    }
  }

  function handleOnBlur({ field }) {
    if (field === userNameField && !userName) {
      setIsUserNameErr(true);
    }
    if (field === passwordField && !password) {
      setIsPasswordErr(true);
    }
  }

  return (
    <MainLayout title={"Login Page:"}>
      <LoginBox>
        <BoxTitle>Login</BoxTitle>
        <Content>
          <Label>User Name</Label>
          <InputField>
            <input
              type="text"
              name="username"
              value={userName}
              placeholder="User name"
              autoComplete="off"
              onChange={(e) => handleOnChange({ field: userNameField, e })}
              style={{ borderColor: isUserNameErr && "red" }}
              onFocus={() => handleOnFocus({ field: userNameField })}
              onBlur={() => handleOnBlur({ field: userNameField })}
            />
            {isUserNameErr && <Error>User name is required</Error>}
          </InputField>

          <Label>Password</Label>
          <InputField>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => handleOnChange({ field: passwordField, e })}
              style={{ borderColor: isPasswordErr && "red" }}
              onFocus={() => handleOnFocus({ field: passwordField })}
              onBlur={() => handleOnBlur({ field: passwordField })}
            />
            {isPasswordErr && <Error>Password is required</Error>}
          </InputField>
          {password && (
            <DisplayPass onClick={() => setShowPass(!showPass)}>
              {textTogglePass}
            </DisplayPass>
          )}
          {submitErr && <Error>{submitErr}</Error>}

          <PrimaryBtn click={handleLogin}>
            {isLoading ? <CircleLoading /> : "Submit"}
          </PrimaryBtn>
        </Content>
      </LoginBox>
    </MainLayout>
  );
};

const LoginBox = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 300px;
  height: auto;
  background-color: ${GREY_BACKGROUND};
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid ${BORDER_COLOR};
  @media only screen and (max-width: 280px) {
    width: 250px;
  }
`;
const BoxTitle = styled.div`
  height: 30px;
  color: #fff;
  background-color: ${COLOR_THEME};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px 5px 0 0;
`;
const Content = styled.div`
  padding: 20px;
  text-align: left;
`;
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
const InputField = styled.div`
  width: 100%;
  margin-bottom: 25px;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${BORDER_COLOR};
    appearance: none;
    outline: 0;
    width: calc(100% - 20px);
    ::-webkit-input-placeholder {
      color: #777777;
    }
    :-ms-input-placeholder {
      color: #777777;
    }
    ::placeholder {
      color: #777777;
    }
  }
`;

const DisplayPass = styled.div`
  text-align: right;
  margin-top: -15px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
