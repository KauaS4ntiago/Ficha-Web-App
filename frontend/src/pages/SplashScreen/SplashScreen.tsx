import './splashScreen.css'
import Dice from '../../assets/diceLogo.svg'

function SplashScreen() {
    return (
        <div className='splash-container'>
            <img src={Dice} alt="carregando" className='splash-dice' />
        </div>
    )
}

export default SplashScreen