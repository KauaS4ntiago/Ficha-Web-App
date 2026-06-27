import NavBar from '../../components/NavBar/NavBar';
import Plus from '../../assets/plus.svg'
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import {Link} from 'react-router-dom'
import './dashBoard.css'

function DashBoard() {
    //dados mockados
    const characters = [
    { id: 1, name: "Personagem 1", image: "https://placehold.co/100x100" },
    { id: 2, name: "Personagem 2", image: "https://placehold.co/100x100" },
    { id: 3, name: "Personagem 3", image: "https://placehold.co/100x100" },
    { id: 4, name: "Personagem 4", image: "https://placehold.co/100x100" },
    { id: 5, name: "Personagem 5", image: "https://placehold.co/100x100" }
]
    return (
        <div className='DashBoard-container'>
            <NavBar/>
            <div className='DashBoard-header'>
                <h1>Meus personagens</h1>
                <Link className='DashBoard-link' to='/create-character'><button className='DashBoard-button'><img src={Plus} alt="Adicionar"/></button></Link>
            </div>
            <ul className='Dashboard-list'>
                {characters.map(character => (
                    <CharacterCard name={character.name} image={character.image} id={character.id} key={character.id}/>
                ))}
            </ul>
        </div>
    )
}

export default DashBoard