import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './TestingCSS';
import Sass from './Sass';
import reportWebVitals from './reportWebVitals';
import Theme from './styles/theme';
import App3 from './UseingState';
import App4 from './UseingState2';
import App5 from './UseEffect';
import App6 from './UseReducer';
import App7 from './ShoppingCart';
import App8 from './UseReducer2';
import App9 from './Router';
import { BrowserRouter } from 'react-router-dom';
import App11 from './ApiCall2';
import App12 from './ApiSingle';
import App13 from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Theme>
        <App />
        <br></br>
        <App1 />
        <br></br>
        <Sass />
        <br></br>
        <App3 />
        <br></br>
        <App4 />
        <br></br>
        <App5 />
        <br></br>
        <App6 />
        <br></br>
        <App7 />
        <br></br>
        <App8 />
        <br></br>
        <hr></hr>
        <App9 />
        <hr></hr>
        <App11 />
        <hr></hr>
        <App12 />
        <hr></hr>
        <App13 />
      </Theme>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
