import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Routes from './Routes'
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'
import "mdbreact/dist/css/mdb.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<Routes />);