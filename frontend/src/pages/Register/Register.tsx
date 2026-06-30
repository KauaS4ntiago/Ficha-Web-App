import {useState} from 'react'
import '../../styles/auth.css'
import logo from '../../assets/logo.svg'
import {Link, useNavigate} from 'react-router-dom'


function Register() {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setRepPassword] = useState('')

    const navigate = useNavigate()

    function handleRegister() {
        fetch('http://127.0.0.1:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.token) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user_id', data.user_id)
                navigate('/dashboard')
            } else {
                alert(data.error)
            }
    })
    }

    return (
        <div className='auth-container'>
            <img className="auth-img" src={logo} alt="RpG Logo"/>
            <div className='auth-card'>
                <h1>Cadastro</h1>
                <label htmlFor="username">Nome de Usuário</label>
                <input className="auth-input" id="name" type="text" placeholder='Digite seu nome de usuário' value={userName} onChange={e => {setUserName(e.target.value)}}/>
                <label htmlFor="email">E-mail</label>
                <input className="auth-input" id="email" type="text" placeholder='Digite seu e-mail' value={email} onChange={e => {setEmail(e.target.value)}}/>
                <label htmlFor="password">Senha</label>
                <input className="auth-input" id="password" placeholder='Digite sua senha' type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                <input className="auth-input" id="password" placeholder='Digite novamente sua senha' type="password" value={repPassword} onChange={e => {setRepPassword(e.target.value)}}/>
                <button className="auth-button" onClick={() => handleRegister()}>Cadastrar</button> 
            </div>
            <p>Já possui uma conta? <Link to='/'>clique aqui</Link></p>
        </div>
    )
}

export default Register;