import {useState} from 'react'
import './Login.css' 
import logo from '../../assets/logo.svg'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleLogin() {
        console.log("Email: ", email)
        console.log("Password: ", password)
    }

    return (
        <div className='login-container'>
            <img className="login-img" src={logo} alt="RpG Logo"/>
            <div className='card-login'>
                <h1>Log-in</h1>
                <label htmlFor="email">E-mail</label>
                <input className="input-login" id="email" type="text" placeholder='Digite seu e-mail' value={email} onChange={e => {setEmail(e.target.value)}}/>
                <label htmlFor="password">Senha</label>
                <input className="input-login" id="password" placeholder='Digite sua senha' type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                <p>Esqueceu sua senha? <a href="">clique aqui!</a></p>
                <button className="button-login" onClick={handleLogin}>Entrar</button> 
            </div>
            <p>Ainda não possui uma conta? <a className="" href="/register">clique aqui!</a></p>
        </div>
    )
}


export default Login