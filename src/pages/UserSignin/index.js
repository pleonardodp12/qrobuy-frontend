import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import ButtonConfirm from "../../components/ButtonConfirm";
import { connect, useSelector } from "react-redux";
import { signInUser, logout } from "../../redux/actions/accountAction";
import { UserSigninContainer } from "./styles";
import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { GiCardExchange } from 'react-icons/gi';

const UserSignin = ({ signInUser, logout }) => {
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
  const { isAuthenticated } = useSelector(state => state.account)

  return (
    <>
    { isAuthenticated === null ? (
    <UserSigninContainer onSubmit={handleSignIn}>
      <InputForm labelName="Login" name="email" onChange={changeLogin} />
      <InputForm
        labelName="Senha"
        name="password"
        type="password"
        onChange={changeLogin}
      />
      <ButtonConfirm textButton="Entrar" type="submit" />
    </UserSigninContainer>) : (
      <UserSigninContainer>
        <Link to="/user/devolution"><ButtonConfirm textButton="Devoluções" iconButton={<GiCardExchange />}/></Link>
        <ButtonConfirm textButton="Logout" type="button"iconButton={<FiLogOut />} onClick={logout}/>
      </UserSigninContainer>
    )}
  </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.account)
  return { account: state.account };
};

export default connect(mapStateToProps, {
  signInUser,
  logout,
})(UserSignin);
