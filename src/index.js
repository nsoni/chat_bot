import React from 'react'
import ReactDom from 'react-dom'
import Routes from './config/routes'
import { StoreProvider } from './redux/Store'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDom.render(
  <StoreProvider>
    <Router>
      <Routes/>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
