import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  h2 {
    align-self: flex-start;
    color: #E5383B;
    margin: 32px 0;
  }

  @media(max-width: 700px){
    padding: 8px;
    h2{
      margin-left: 16px;
    }
  }
`;

export const GridProducts = styled.div`
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  list-style-type: none;
  padding-bottom: 80px;
`;