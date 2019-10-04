import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
      console.log('Funciona!');
      console.log(email);
  
      const response = await api.post('/sessions', {
        email,
      });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard')
    }  

    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua equipe!
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail *</label>
            <input
                type="email" 
                id="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button
                type="submit"
                className="btn">
                Entrar
            </button>
            </form>
        </>
    )
}