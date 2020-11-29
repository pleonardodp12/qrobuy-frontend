import React, { useState } from 'react';
import ButtonConfirm from '../../components/ButtonConfirm';
import InputForm from '../../components/InputForm';
import { UserDevolutionContainer, ConfirmEmailSuccess } from './styles';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import { BiHappyAlt } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import successAnimation from '../../assets/success-animation.json';

const UserDevolution = () => {
  const [ confirmEmail, setConfirmEmail] = useState(null);
  const history = useHistory();

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_9jd3t1e', 'template_5ggpxth', e.target, 'user_OYdCUQRcTVVvShaTvhaBP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setConfirmEmail(true)
      setTimeout(() => {
        history.push('/')
      },5000)
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <UserDevolutionContainer onSubmit={sendEmail}>
      <h2>Deseja devolver um produto?</h2>
      <h3>Siga as etapas abaixo</h3>
      <InputForm labelName="Digite o seu email:" type="text" name="email" id="email" required/>
      <InputForm labelName="Digite o nome do produto:" type="text" name="compra" id="compra" required/>
      <ButtonConfirm textButton="Solicitar" type="submit" />

      { confirmEmail &&(
        <ConfirmEmailSuccess>
          <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
          />
          <h5>Obrigado!</h5>
          <h5>Recebemos o seu email</h5>
          <BiHappyAlt />
        </ConfirmEmailSuccess>)}
    </UserDevolutionContainer>
  )
}

export default UserDevolution
