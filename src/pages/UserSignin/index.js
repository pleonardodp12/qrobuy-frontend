import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import ButtonConfirm from "../../components/ButtonConfirm";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/signinAction";
import api from "../../services/api";
import axios from "axios";

import { UserSigninContainer } from "./styles";

const UserSignin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: login.email,
      password: login.password,
    };
    api.post("/signin", credentials).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <UserSigninContainer onSubmit={submitLogin}>
      <InputForm labelName="Login" name="email" onChange={changeLogin} />
      <InputForm
        labelName="Senha"
        name="password"
        type="password"
        onChange={changeLogin}
      />
      <ButtonConfirm textButton="Entrar" type="submit" />
    </UserSigninContainer>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE.account", state);
  return { account: state };
};

export default connect(mapStateToProps, {
  loginUser,
})(UserSignin);
