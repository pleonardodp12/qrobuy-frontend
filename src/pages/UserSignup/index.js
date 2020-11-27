import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import ButtonConfirm from "../../components/ButtonConfirm";
import { UserSignupContainer } from "./styles";
import { signUpUser } from "../../redux/actions/signupAction";
import { connect } from "react-redux";

const UserSignup = ({ signUpUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeSignup = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <UserSignupContainer
      onSubmit={(event) => {
        event.preventDefault();
        signUpUser(user);
      }}
    >
      <InputForm
        labelName="Email"
        name="email"
        type="email"
        onChange={changeSignup}
      />
      <InputForm
        labelName="Senha"
        type="password"
        name="password"
        onChange={changeSignup}
      />
      <ButtonConfirm textButton="Cadastrar" type="submit" />
    </UserSignupContainer>
  );
};

export default connect(null, { signUpUser })(UserSignup);
