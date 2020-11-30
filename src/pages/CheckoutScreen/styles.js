import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 40px;
  button {
    margin-top: 16px;
  }
  p {
    color: green;
    margin: 2px 0 8px 0;
  }
`;

export const MiniInputSection = styled.div`
  width: 230px;
  margin-bottom: 10px;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const PaymentScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: green;
    font-size: 24px;
    text-align: center;
  }


  h5 {
    color: #E5383B;
    font-size: 18px;
  }

  strong {
    color: green;
  }
  button {
    margin: 8px 0;
  }
`;