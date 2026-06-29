import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Exit from '../../assets/exit.svg'
import { useNavigate } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    const navigate = useNavigate()
    return(
        <div className='NavBar-container'>
            <img className="Logo-img" src={Logo} alt="RpG Logo"/>
            <div className='Search-bar'>
                <img src={Search} alt="Lupa de pesquisa" />
                <input type="text" placeholder='Pesquisar'/>
            </div>
            <button className='exit-button' onClick={() => navigate('/')}><img src={Exit} alt="ícone de sair"/>Sair</button>
        </div>      
    )
}

export default NavBar