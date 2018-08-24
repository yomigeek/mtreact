import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/components/App';
import '../src/app/assets/css/bootstrap.min.css';
import '../src/app/assets/css/app.css';
import FooterComponent from './app/components/FooterComponent';


ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('app')
);