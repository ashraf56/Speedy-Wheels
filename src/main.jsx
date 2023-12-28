import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route.jsx';
import AuthenticationCenter from './Routes/AuthenticationCenter.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationCenter>
      <RouterProvider router={router} />
    </AuthenticationCenter>
  </React.StrictMode>,
)
