import {useState} from 'react'
import '../../styles/auth.css'
import logo from '../../assets/logo.svg'
import {Link, useNavigate} from 'react-router-dom'


function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')

    const navigate = useNavigate()

    return (
        <div className='auth-container'>
            <img className="auth-img" src={logo} alt="RpG Logo"/>
            <div className='auth-card'>
                <h1>Cadastro</h1>
                <label htmlFor="email">E-mail</label>
                <input className="auth-input" id="email" type="text" placeholder='Digite seu e-mail' value={email} onChange={e => {setEmail(e.target.value)}}/>
                <label htmlFor="password">Senha</label>
                <input className="auth-input" id="password" placeholder='Digite sua senha' type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                <input className="auth-input" id="password" placeholder='Digite novamente sua senha' type="password" value={repPassword} onChange={e => {setRepPassword(e.target.value)}}/>
                <button className="auth-button" onClick={() => navigate('/dashBoard')}>Cadastrar</button> 
            </div>
            <p>Já possui uma conta? <Link to='/'>clique aqui</Link></p>
        </div>
    )
}

export default Register;