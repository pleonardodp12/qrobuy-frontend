import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react'
import LoginAdmin from './pages/LoginAdmin';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginAdmin} />
    </BrowserRouter>
  )
}

export default Routes;
