import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaoEncontrada from './pages/naoencontrada';
import DashBoard from './pages/admin/dashboard';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudeventos';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const RotaPrivada = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { 
      props =>
      localStorage.getItem('token-nyous-tarde') === null  ?
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> :
        <Component {...props} />
    }
  />
);

const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route 
    {...rest}
    render = { 
      props =>
      localStorage.getItem('token-nyous-tarde') !== null && jwt_decode(localStorage.getItem('token-nyous-tarde')).role !== 'Admin' ?
        <Redirect to={{pathname : '/login', state :{from : props.location}}}/> :
        <Component {...props} />
    }
  />
);

const routing = ( 
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cadastrar' component={Cadastrar} />
      <RotaPrivada exact path='/eventos' component={Eventos} />
      <RotaPrivadaAdmin exact path='/admin/dashboard' component={DashBoard} />
      <RotaPrivadaAdmin exact path='/admin/categorias' component={CrudCategorias} />
      <RotaPrivadaAdmin exact path='/admin/eventos' component={CrudEventos} />
      <Route component={NaoEncontrada} />
    </Switch>
  </Router>  
);

ReactDOM.render(
  routing,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
