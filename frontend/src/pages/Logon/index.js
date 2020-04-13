import React, {useState} from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import {Link, useHistory} from 'react-router-dom'

import heroesImg from '../../Assets/heroes.png'
import logoImg from '../../Assets/logo.svg'


export default function Logon(){

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(event){
    event.preventDefault();

    try{
      const response = await api.post('sessions');
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    }catch(err){
      alert('Falha no login. Tente novamente!');
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo"/>
        <form action="">
          <h1>Faça seu login</h1>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={event => setId(event.target.value)}
          />
          <button onClick={handleLogin} className="button" type="submit">Entrar</button>

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