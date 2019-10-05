import React, {useState,useEffect,useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function New() {
    const [company,setCompany] = useState('');
    const [techs,setTechs] = useState('');
    const [price,setPrice] = useState('');
    const [thumbnail,setThumbnail] = useState(null);

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null
        },
        [thumbnail]
    )

    function handleSubmit() {

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label 
                    id="thumbnail"
                    style={{ backgroundImage: `url(${preview})` }}
                    className={thumbnail ? 'has-thumbnail' : ''}
                >
                    <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                    <img src={camera} alt="choose image"/>
                </label>
                <label htmlFor="company">Empresa *</label>
                <input 
                    id="company"
                    placeholder="Sua empresa incrível"
                    value={company}
                    onChange={event => setCompany(event.target.value)}>
                </input>
                <label htmlFor="techs">Tecnologias * <span>(separado por vírgula)</span></label>
                <input 
                    id="techs"
                    placeholder="Suas tecnologias"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}>
                </input>
                <label htmlFor="price">Valor da Diária * <span>(em branco para gratuíto)</span></label>
                <input 
                    id="price"
                    placeholder="em R$"
                    value={price}
                    onChange={event => setPrice(event.target.value)}>
                </input>
                <button className="btn">
                    Cadastrar
                </button>
            </form>
        </>
    );
}