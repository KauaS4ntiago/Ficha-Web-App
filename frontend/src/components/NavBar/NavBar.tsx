import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Exit from '../../assets/exit.svg'
import './navBar.css'

function NavBar() {
    return(
        <div className='NavBar-container'>
            <img className="Logo-img" src={Logo} alt="RpG Logo"/>
            <div className='Search-bar'>
                <img src={Search} alt="Lupa de pesquisa" />
                <input type="text" placeholder='Pesquisar'/>
            </div>
            <button className='exit-button'><img src={Exit} alt="ícone de sair"/>Sair</button>
        </div>      
    )
}

export default NavBar