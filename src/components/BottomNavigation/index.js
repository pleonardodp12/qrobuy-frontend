import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { BottomBar, CircleButton } from './styles';
import { AiFillHome, AiFillShopping, AiOutlineQuestionCircle } from 'react-icons/ai';

const BottomNavigation = () => {
  return (
      <BottomBar>
        <Link to="/"><AiFillHome /></Link>
        <Link to="/cart"><CircleButton><AiFillShopping /></CircleButton></Link>
        <Link to="/faq"><AiOutlineQuestionCircle /></Link>
      </BottomBar>
  )
}

export default BottomNavigation
