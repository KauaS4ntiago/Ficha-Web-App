import './abilityCard.css'

function AbilityCard({image, title, description}:{image:string, title:string, description:string}) {    
    return (
        <div>
            <img src={image} alt="Imagem da habilidade"/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}


export default AbilityCard