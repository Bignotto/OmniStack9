import React, {useEffect} from 'react';
import api from '../../services/api';

export default function Dashboard() {
    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: {user_id}
            });

            console.log(response.data);
        }
        loadSpots();
    }, []);
    //array vazio executa a função uma única vez somente

    //TODO: 1:01:50 aula 3
    //criar o loop para exibir os spots!
    return <h1>Funciona!</h1>;
}