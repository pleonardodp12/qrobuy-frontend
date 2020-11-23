import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineMail } from 'react-icons/ai';
import {
  ContainerFaq,
  ContentQuestionFaq,
  ShowContentAnshwerButton,
  Question,
  Answer,
  ContainerFaqEmail,
  EmailForm
} from './styles';

const FAQScreen = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [ rotate, setRotate] = useState('rotate')

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
        <EmailForm onSubmit="">
          <label>Seu Email:</label>
          <input type="email" />
          <label>Fale conosco:</label>
          <textarea type="textarea" />
        </EmailForm>
        <button type="submit">ENVIAR <AiOutlineMail /></button>
      </ContainerFaqEmail>
    </ContainerFaq>
  )
}

export default FAQScreen;
