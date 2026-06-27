import './characterSheet.css'
import { useState } from 'react'
import AbilityCard from '../../components/Ability/abilityCard'
import ExitArrow from '../../assets/exitArrow.svg'
import Edit from '../../assets/edit.svg'
import Anotation from '../../assets/anotation.svg'
import Dice from '../../assets/dice.svg'
import Heart from '../../assets/heart.svg'
import Shield from '../../assets/shield.svg'
import Hexagon from '../../assets/hexagon.svg'
import Add from '../../assets/add.svg'
import Minus from '../../assets/minus.svg'
import Arrow from '../../assets/arrow.svg'

function CharacterSheet() {
    const [maxHp, setMaxHp] = useState(23)
    const [currentHp, setCurrentHp] = useState(23)

    const [maxSanity, setSanity] = useState(23)
    const [currentSanity, setCurrentSanity] = useState(23)

        const abilities = [
    { id: 1, title: "bola de fogo", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 2, title: "bola de gelo", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 3, title: "bola de água", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 4, title: "bola de terra", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 5, title: "bola de planta", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    ]

    return (
    <div className='CharacterSheet-container'>
            <div className='CharacterSheet-header'>
                <button><img src={ExitArrow} alt="botão de saída"/></button>
                <h1>Ficha de personagem</h1>
                <div className='CharacterSheet-header-buttons'>
                    <button><img src={Anotation} alt="botão de anotação"/>Anotações</button>
                    <button><img src={Edit} alt="botão de edição"/>Editar</button>
                </div>           
            </div>
        <div className='CharacterSheet-content'>
                        <div className='CharacterSheet-character'>
                <div className='CharacterSheet-profile'>
                    <button><img src={Dice} alt="botão de girar dados"/></button>
                    <img src="https://placehold.co/200x200" alt="imagem do personagem"/>
                    <h3>nome do personagem</h3>
                        <div>
                            <button onClick={() => setCurrentHp(currentHp - 1)}><img src={Arrow} alt="Diminuir"/></button>
                            <span>{currentHp} / {maxHp}</span>
                            <button onClick={() => setCurrentHp(currentHp + 1)}><img src={Arrow} alt="Aumentar"/></button>
                        </div>
                            <div>
                                <img src={Shield} alt="defesa do personagem"/>
                                <p>18</p>
                            </div>
                        <div>
                            <img src={Heart} alt="vida do personagem"/>
                            <button onClick={() => setCurrentSanity(currentSanity + 1)}><img src={Add} alt="Aumentar"/></button>
                            <span>{currentSanity} / {maxSanity}</span>
                            <button onClick={() => setCurrentSanity(currentSanity - 1)}><img src={Minus} alt="Diminuir"/></button>
                        </div>
                </div>
                <div className='CharacterSheet-attributes'>
                    <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                        <h2>Intelecto</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                        <h2>Força</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                        <h2>Vigor</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                        <h2>Agilidade</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                        <h2>Presença</h2>
                </div>
            </div>
            <div className='CharacterSheet-skill'>
                <h2>Perícias</h2>
                <ol>
                    <li><p>Atletismo</p> <input type="number" aria-label="atletismo" defaultValue={0}/> <input type="number" aria-label="atletismo2" defaultValue={0}/></li>
                    <li><p>Furtividade</p> <input type="number" aria-label="furtividade" defaultValue={0}/> <input type="number" aria-label="furtividade2" defaultValue={0}/></li>
                    <li><p>Percepção</p> <input type="number" aria-label="percepcao" defaultValue={0}/> <input type="number" aria-label="percepcao2" defaultValue={0}/></li>
                    <li><p>Persuasão</p> <input type="number" aria-label="persuasao" defaultValue={0}/> <input type="number" aria-label="persuasao2" defaultValue={0}/></li>
                    <li><p>Intimidação</p> <input type="number" aria-label="intimidacao" defaultValue={0}/> <input type="number" aria-label="intimidacao2" defaultValue={0}/></li>
                    <li><p>Medicina</p> <input type="number" aria-label="medicina" defaultValue={0}/> <input type="number" aria-label="medicina2" defaultValue={0}/></li>
                    <li><p>Investigação</p> <input type="number" aria-label="investigacao" defaultValue={0}/> <input type="number" aria-label="investigacao2" defaultValue={0}/></li>
                    <li><p>Arcanismo</p> <input type="number" aria-label="arcanismo" defaultValue={0}/> <input type="number" aria-label="arcanismo2" defaultValue={0}/></li>
                    <li><p>História</p> <input type="number" aria-label="historia" defaultValue={0}/> <input type="number" aria-label="historia2" defaultValue={0}/></li>
                    <li><p>Acrobacia</p> <input type="number" aria-label="acrobacia" defaultValue={0}/> <input type="number" aria-label="acrobacia2" defaultValue={0}/></li>
                </ol>
            </div>
            <div className='CharacterSheet-abilities-inventory'>
                <h2>Habilidades</h2>
                <ol>
                    {abilities.map(ability => (<AbilityCard title={ability.title} description={ability.description} image={ability.image} key={ability.id}/>))}
                </ol>

                <h2>Inventário</h2>
                <textarea aria-label="inventário" name="inventário" id="inventory"></textarea>
            </div>
        </div>
    </div>
    )
}

export default CharacterSheet