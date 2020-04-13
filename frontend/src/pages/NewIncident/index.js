import React, {useState} from 'react';
import './styles.css';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../Assets/logo.svg';

import api from '../../services/api';


export default function NewIncident(){

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(event){
    event.preventDefault();

    const data = {
      title, 
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers:{
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (err) {
      alert('Não foi possivel cadastrar o caso.');
    }
  }

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
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Titulo do caso:"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea 
            placeholder="Descrição" name="Descrição:"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input type="text" 
            placeholder="Valor em R$"
            value={value}
            onChange={event => setValue(event.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}