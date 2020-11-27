import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import ButtonConfirm from "../../components/ButtonConfirm";
import { connect } from "react-redux";
import { signInUser } from "../../redux/actions/accountAction";
import { UserSigninContainer } from "./styles";

const UserSignin = ({ signInUser }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    signInUser(login);
  };

  return (
    <UserSigninContainer onSubmit={handleSignIn}>
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
  signInUser,
})(UserSignin);
