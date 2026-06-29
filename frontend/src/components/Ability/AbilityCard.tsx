import './abilityCard.css'

function AbilityCard({image, title, description}:{image:string, title:string, description:string}) {    
    return (
        <div className='AbilityCard-container'>
            <img src={image} alt="Imagem da habilidade"/>
            <div className='AbilityCard-text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div> 
        </div>
    )
}


export default AbilityCard