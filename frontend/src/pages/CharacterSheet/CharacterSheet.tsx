import './characterSheet.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AbilityCard from '../../components/Ability/AbilityCard'
import ExitArrow from '../../assets/exitArrow.svg'
import Edit from '../../assets/edit.svg'
import Dice from '../../assets/dice.svg'
import Heart from '../../assets/heart.svg'
import Shield from '../../assets/shield.svg'
import Hexagon from '../../assets/hexagon.svg'
import Add from '../../assets/add.svg'
import Minus from '../../assets/minus.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import SanityBar from '../../assets/sanityBar.svg'

function CharacterSheet() {
    const [maxHp, setMaxHp] = useState(23)
    const [currentHp, setCurrentHp] = useState(23)

    const [maxSanity, setSanity] = useState(23)
    const [currentSanity, setCurrentSanity] = useState(23)

    const navigate = useNavigate()

        const abilities = [
    { id: 1, title: "bola de fogo", description: "Kabum tibeife pof pof Kabum tibeife pof pof Kabum tibeife pof pof Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 2, title: "bola de gelo", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 3, title: "bola de água", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 4, title: "bola de terra", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 5, title: "bola de planta", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 6, title: "bola de fogo", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 7, title: "bola de gelo", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 8, title: "bola de água", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 9, title: "bola de terra", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    { id: 10, title: "bola de planta", description: "Kabum tibeife pof pof", image: "https://placehold.co/50x50" },
    ]

return (
    <div className='CharacterSheet-container'>
        <div className='CharacterSheet-header'>
            <button onClick={() => navigate(-1)}><img src={ExitArrow} alt="botão de saída"/></button>      
        </div>
        <div className='CharacterSheet-content'>
            <div className='CharacterSheet-character'>
                <h2>Ficha de personagem</h2>
                <div className='CharacterSheet-profile'>                    
                    <div className='profile-image-wrapper'>
                        <img className='Profile-img' src="https://placehold.co/200x200" alt="imagem do personagem"/>
                        <button className='dice-button'><img src={Dice} alt="botão de girar dados"/></button>
                        <div className='Shield'>
                            <img src={Shield} alt="defesa do personagem"/>
                            <p>16</p>
                        </div>
                        <div className='SanityBar'>
                            <img src={SanityBar} alt="barra de sanidade" className='sanityBar-img'/>
                            <div className='sanityBar-content'>
                                <button onClick={() => setCurrentSanity(currentSanity + 1)}><img src={Add} alt="Aumentar"/></button>
                                <p className='sanity-current'>{currentSanity}</p>
                                <p className='sanity-divider'>/</p>
                                <p className='sanity-max'>{maxSanity}</p>
                                <button onClick={() => setCurrentSanity(currentSanity - 1)}><img src={Minus} alt="Diminuir"/></button>
                            </div>
                        </div>
                    </div>

                    <div className='profile-info'>
                        <h3>nome do personagem</h3>
                    </div>

                    <div className='lifeBar-container'>
                        <img src={Heart} alt="vida do personagem"/>
                        <div className='lifeBar'>
                            <button onClick={() => setCurrentHp(currentHp - 1)}><img src={ArrowLeft} alt="Diminuir"/></button>
                            <span>{currentHp} / {maxHp}</span>
                            <button onClick={() => setCurrentHp(currentHp + 1)}><img src={ArrowRight} alt="Aumentar"/></button>
                        </div>
                    </div>
                </div>

                <div className='CharacterSheet-attributes'>
                    <div className='attribute-icon'>
                        <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                    </div>
                    <h2>Intelecto</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <div className='attribute-icon'>
                        <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                    </div>
                    <h2>Força</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <div className='attribute-icon'>
                        <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                    </div>
                    <h2>Vigor</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <div className='attribute-icon'>
                        <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                    </div>
                    <h2>Agilidade</h2>
                </div>
                <div className='CharacterSheet-attributes'>
                    <div className='attribute-icon'>
                        <img src={Hexagon} alt="hexágona de atributo"/>
                        <p>1</p>
                    </div>
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
                <button><img src={Edit} alt="botão de edição"/></button>
                <h2>Habilidades</h2>
                <ol>
                    {abilities.map(ability => (<AbilityCard title={ability.title} description={ability.description} image={ability.image} key={ability.id}/>))}
                </ol>
                <h2>Anotações</h2>
                <textarea aria-label="anotações" name="anotações" id="inventory"></textarea>
            </div>
        </div>
    </div>
)
}

export default CharacterSheet