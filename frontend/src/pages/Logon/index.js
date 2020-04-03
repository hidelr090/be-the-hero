import React from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';

import {Link} from 'react-router-dom'

import heroesImg from '../../Assets/heroes.png'
import logoImg from '../../Assets/logo.svg'


export default function Logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>
        <form action="">
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="./register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes"/>
    </div>
  );
}