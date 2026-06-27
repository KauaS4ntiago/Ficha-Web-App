import './characterCard.css'
import {Link} from 'react-router-dom'

function CharacterCard({name, image, id}:{name: string, image:string, id: number }) {
    return (
        <div className="CharacterCard-container">
            <Link to={`/character/${id}`}>
                <img src={image} alt="Imagem de personagem"/>
                <h2>{name}</h2>
            </Link>
        </div>    
    )
}

export default CharacterCard