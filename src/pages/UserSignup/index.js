import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import ButtonConfirm from "../../components/ButtonConfirm";
import { UserSignupContainer, SignUpSuccess } from "./styles";
import { signUpUser } from "../../redux/actions/accountAction";
import { connect } from "react-redux";
import { BiHappyAlt } from 'react-icons/bi';
import Lottie from 'react-lottie';
import successAnimation from '../../assets/success-animation.json';
import { useHistory } from "react-router-dom";

const UserSignup = ({ signUpUser }) => {
  const [signUpUserAnimation, setSignUpUserAnimation] = useState(null)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const changeSignup = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    try {
      signUpUser(user)
      event.target.reset()
      setSignUpUserAnimation(true)
      setTimeout(() => {
        history.push('/cart')
      },4000)
    } catch (err){
      window.alert("Erro ao cadastrar usuário")
    }
   
    
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <UserSignupContainer onSubmit={handleSignUp}>
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
      { signUpUserAnimation &&(
        <SignUpSuccess>
          <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
          />
          <h5>Parabéns!</h5>
          <h5>você foi registrado!</h5>
          <BiHappyAlt />
        </SignUpSuccess>)}
    </UserSignupContainer>
  );
};

export default connect(null, { signUpUser })(UserSignup);
