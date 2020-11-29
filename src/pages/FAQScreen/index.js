import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineMail } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import Lottie from 'react-lottie';
import { BiHappyAlt } from 'react-icons/bi';
import successAnimation from '../../assets/success-animation.json';
import { useHistory } from 'react-router-dom';
import {
  ContainerFaq,
  ContentQuestionFaq,
  ShowContentAnshwerButton,
  Question,
  ConfirmEmailSuccess,
  Answer,
  ContainerFaqEmail,
  EmailForm,
} from './styles';

const FAQScreen = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [ confirmEmail, setConfirmEmail] = useState(null)
  const [ rotate, setRotate] = useState('rotate');

  const history = useHistory();


  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_9jd3t1e', 'template_fgycwhx', e.target, 'user_OYdCUQRcTVVvShaTvhaBP')
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

  const showAnswerHandler = () => {
    setShowAnswer(true);
    setRotate('rotate90')
    if(showAnswer){
      setShowAnswer(false)
      setRotate('rotate')
    }
  }

  const faqs = [
    {
      question: "Como comprovar que fiz a compra pelo QRoBuy?",
      answer: "Após o escaneamento do QR Code, é emitido um comprovante da compra que  pode ser baixado em PDF e que também é automaticamente enviado pro e-mail cadastrado"
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "O pagamento será feito através de cartão de crédito, sendo possível pagar á vista ou parcelar sem juros de acordo com o produto comprado!",
    },
    {
      question: "Como faço para devolver o produto?",
      answer: "Você pode acessar a parte “Devolução” dentro do seu Perfil no menu Inicial e solicitar a devolução",
    },
  ]
  return (
    <ContainerFaq>
      <h2>Dúvidas frequentes</h2>
      {faqs.map((faq,index) => {
        return(
          <ContentQuestionFaq onClick={showAnswerHandler} key={index}>
            <ShowContentAnshwerButton><AiOutlineArrowDown className={rotate}/></ShowContentAnshwerButton>
            <Question>{faq.question}</Question>
            { showAnswer ? <Answer>{faq.answer}</Answer> : false}
          </ContentQuestionFaq>
        )
      })}
      <ContainerFaqEmail>
        <h2>
          Continua com dúvidas?
        </h2>
        <EmailForm onSubmit={sendEmail}>
          <label>Seu Email:</label>
          <input type="email" name="email" id="email" required />
          <label>Fale conosco:</label>
          <textarea type="textarea" name="duvida"  id="duvida" required />
          <button type="submit">ENVIAR <AiOutlineMail /></button>
        </EmailForm>
      </ContainerFaqEmail>
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
    </ContainerFaq>
  )
}

export default FAQScreen;
