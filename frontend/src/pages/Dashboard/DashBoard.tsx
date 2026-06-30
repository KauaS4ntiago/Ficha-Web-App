import NavBar from '../../components/NavBar/NavBar';
import Plus from '../../assets/plus.svg'
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import {Link} from 'react-router-dom'
import './dashBoard.css'
import { useEffect, useState } from 'react';

function DashBoard() {
    interface Character {
        id: number
        name: string
        image: string
    }

    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState<Character[]>([])



    useEffect(() => {
        const userId = localStorage.getItem('user_id')
        fetch(`http://127.0.0.1:5000/characters/user/${userId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setCharacters(data)
    })})
        
    const filteredCharacters = characters.filter(
        character => character.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='DashBoard-container'>
           <NavBar search={search} setSearch={setSearch} />
            <div className='DashBoard-header'>
                <h1>Meus personagens</h1>
                <Link className='DashBoard-link' to='/create-character'><button className='DashBoard-button'><img src={Plus} alt="Adicionar"/></button></Link>
            </div>
            <ul className='Dashboard-list'>
                {filteredCharacters.map(character => (
                    <CharacterCard name={character.name} image={character.image} id={character.id} key={character.id}/>
                ))}
            </ul>
        </div>
    )
}

export default DashBoard