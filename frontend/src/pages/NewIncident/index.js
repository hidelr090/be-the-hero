import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../Assets/logo.svg'


export default function NewIncident(){
  return(
    <div className="newIncident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be-the-hero"/>

          <h1>Cadastro</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis esse tenetur consequuntur dolor harum iste n
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>        
        </section>
        <form>
          <input placeholder="Titulo do caso:"/>
          <textarea placeholder="Descrição" name="Descrição:"/>
          <input type="text" placeholder="Valor em R$"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}