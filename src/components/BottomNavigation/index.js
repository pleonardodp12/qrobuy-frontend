import React from 'react';
import { Link } from 'react-router-dom';
import { BottomBar, CircleButton, Notification } from './styles';
import { useSelector } from 'react-redux';
import { AiFillHome, AiFillShopping, AiOutlineQuestionCircle } from 'react-icons/ai';

const BottomNavigation = () => {
  const length = useSelector(state => state.cart.cartItems);
  return (
      <BottomBar>
        <Link to="/"><AiFillHome /></Link>
        <Link to="/cart">
          <CircleButton>
          <Notification>{length.reduce((a, c) =>  a + c.count, 0)}</Notification>
          <AiFillShopping />
          </CircleButton>
        </Link>
        <Link to="/faq"><AiOutlineQuestionCircle /></Link>
      </BottomBar>
  )
}

export default BottomNavigation
