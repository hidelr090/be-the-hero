import React, {useState} from 'react';
import './styles.css';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../Assets/logo.svg';

import api from '../../services/api';


export default function Register(){

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsapp, setWhatsapp] = useState('');
  const [Cidade, setCidade] = useState('');
  const [UF, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(event){
    event.preventDefault();

    const data = {
      Name,
      Email,
      Whatsapp,
      Cidade,
      UF
    }

    try{
      const response = await api.post('ongs', data);
      alert(`Seu ID:${response.data.id}`);
      history.push('/');
    }catch(err){
      alert('Erro no cadastro. Tente novamente!\n');
    }
  }

  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be-the-hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e encontre pessoas para ajudar nos casos de sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Já tenho cadastro
          </Link>        
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG"
            value={Name}
            onChange={event=>setName(event.target.value)}
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={Email}
            onChange={event=>setEmail(event.target.value)}
          />
          <input 
            placeholder="Whatsapp"
            value={Whatsapp}
            onChange={event=>setWhatsapp(event.target.value)}            
            />
          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={Cidade}
              onChange={event=>setCidade(event.target.value)}
              />
            <input placeholder="UF" style={{width:80}}
              value={UF}
              onChange={event=>setUF(event.target.value)}              
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}