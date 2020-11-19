import React from 'react';
import CardProduct from '../../components/CardProduct';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Container } from './styles';

const HomeScreen = () => {
  return (
    <Container>
      <ScrollContainer className="scroll-container" style={{ "display":"flex"}}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ScrollContainer>
      
    </Container>
  )
}

export default HomeScreen;
