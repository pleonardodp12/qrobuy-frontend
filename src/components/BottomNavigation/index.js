import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { BottomBar, CircleButton } from './styles';
import { AiFillHome, AiFillShopping, AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <BrowserRouter>
      <BottomBar>
        <Link to="/"><AiFillHome /></Link>
        <Link to="/cart"><CircleButton><AiFillShopping /></CircleButton></Link>
        <Link to="/faq"><AiOutlineQuestionCircle /></Link>
      </BottomBar>
    </BrowserRouter>
  )
}

export default BottomNavigation
