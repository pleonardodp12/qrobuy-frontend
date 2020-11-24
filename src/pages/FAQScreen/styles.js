import styled, { keyframes } from 'styled-components';

export const ContainerFaq = styled.div`
  width: 100%;
  height: auto;
  min-height: 90vh;
  background: #E5383B;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-top: 20px;
    margin-bottom: 36px;
  }
`;

export const ContentQuestionFaq = styled.section`
  width: 90%;
  min-height: 60px;
  height: auto;
  padding: 8px 16px;
  position: relative;
  cursor: pointer;
`;

export const ShowContentAnshwerButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  svg {
    width: 24px;
    height: 24px;
    transition: ease-in .2s;
  }

  .rotate45 {
    transform: rotate(0);
  }
  .rotate{
    transform: rotate(-90deg);
    transition: ease-out all .3s;
  }
`;

export const Question = styled.div`
  width: 80%;
  font-size: 18px;
  font-weight: bold;
`;

const down = keyframes`
  from {
    opacity: 0.2;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Answer = styled.div`
  width: 100%;
  font-size: 15px;
  margin: 8px 0;
  border-top: .5px solid #ffffff55;
  padding-top: 4px;
  animation: ${down} .35s ease-in-out;
`;

export const ContainerFaqEmail = styled.div`
  width: 90%;
  min-height: 60px;
  height: auto;
  padding: 8px 16px;
  margin-top: 40px;
  border-top: 1px solid #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 40px;
  margin-bottom: 80px;
  button {
    width: 100%;
    height: 57px;
    margin: 8px 4px;
    border-radius: 4px;
    border: 0;
    color: #E5383B;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    &:hover {
      opacity: .9;
    }
    svg {
      margin-left: 8px;
      width: 24px;
      height: 24px;
    }
  }
`;

export const EmailForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
  font-size: 20px;
  label {
    margin: 0 0 8px 0;
  }
  input{
    width: 100%;
    background: transparent;
    border-radius: 4px;
    border: 1px solid white;
    padding: 16px;
    outline: 0;
    color: white;
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    height: auto;
    min-height: 200px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid white;
    padding: 16px;
    outline: 0;
    color: white;
  }
`;