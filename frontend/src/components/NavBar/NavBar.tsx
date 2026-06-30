import Search from '../../assets/search.svg'
import Exit from '../../assets/exit.svg'
import sideLogo from '../../assets/side-logo.svg'
import { useNavigate } from 'react-router-dom'
import './navBar.css'

interface NavBarProps {
    search: string
    setSearch: (value: string) => void
}

function NavBar({ search, setSearch }: NavBarProps) {

    const navigate = useNavigate()
    return(
        <div className='NavBar-container'>
            <img className="Logo-img" src={sideLogo} alt="RpG Logo"/>
            <div className='Search-bar'>
                <img src={Search} alt="Lupa de pesquisa" />
                <input type="text" value={search} onChange={e => {setSearch(e.target.value)}} placeholder='Pesquisar'/>
            </div>
            <button className='exit-button' onClick={() => navigate('/')}><img src={Exit} alt="ícone de sair"/>Sair</button>
        </div>      
    )
}

export default NavBar