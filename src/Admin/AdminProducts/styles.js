import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 70px;
  padding: 0px 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductDeletePage = styled.div`
  width: 100%;
  height: 80vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListWrapper = styled.div`
  width: 100%;
  padding: 0px .5em;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const ProductListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProductItemContainer = styled.div`
  width: 100%;
  padding: .2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductBtns = styled.div`
  svg {
    height: 100%;
    margin: .2em;

    &:hover{
      cursor: pointer;
      fill: red;
    }
  }
`

export const ProductDetailsContainer = styled.div`
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  padding-top: 1em;
  paddingBottom: 10%;
`;

export const ProductDetailsText = styled.p`
  font-size: 14px;
  width: 100%;
`;

export const ProductHead = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    background-color: #E5E5E5;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }
`

export const ProductInput = styled.input`
  border: none;
  border-bottom: 2px solid #A4161A;
  background: transparent;
  margin-bottom: 1em;
  padding: .5em;
  padding-bottom: .2em;
`

export const ProductLabel = styled.label`
  color: #636363;
`

export const BottomBar = styled.div`
  width: 100%;
  height: 50px;

  background-color: #67BB65;
  position: fixed;
  z-index: 5;
  bottom: 0;
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;
  
  svg {
    width: 32px;
    height: 32px;
    color: white;
    cursor: pointer;
    &:hover{
    opacity: .8;
  }
  }
`;

export const ProductDeleteBtns = styled.div`
  display: flex;  
  margin: 2em;

  button {
    width: 120px;
    margin: 10px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color:#BA181B;
    transition: 100ms;

    &:hover{
      cursor: pointer;
      opacity: 0.7;
    }
  }

  button:first-child {
    background-color: #67BB65;
  }

  a {
    text-decoration: none;
    color: #e5e5e5;
  }

`

export const ProductDeleteHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p { text-aling: center; }

  img {
    margin: 2em;
    width: 70%;
    height: auto;
    background-color: #E5E5E5;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }
`