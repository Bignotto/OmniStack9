import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './styles.css'

export default function Dashboard() {

    const [spots,setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: {user_id}
            });
            console.log(response.data);
            setSpots(response.data);
        }
        loadSpots();
    }, []);
    //array vazio executa a função uma única vez somente

    //TODO: 1:01:50 aula 3
    //criar o loop para exibir os spots!
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$ ${spot.price}/dia` : 'Grátis!'}</span>
                    </li>
                ))}
            </ul>
            <Link to='/new'>
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
        </>
    );
}