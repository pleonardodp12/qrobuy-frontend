import React from 'react';
import { BottomBar, CircleButton } from './styles';
import { AiFillHome, AiFillShopping, AiOutlineQuestionCircle } from 'react-icons/ai';

const BottomNavigation = () => {
  return (
    <BottomBar>
      <AiFillHome />
      <CircleButton><AiFillShopping /></CircleButton>
      <AiOutlineQuestionCircle />
    </BottomBar>
  )
}

export default BottomNavigation
