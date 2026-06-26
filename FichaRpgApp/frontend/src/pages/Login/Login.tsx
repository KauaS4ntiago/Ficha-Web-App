import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleLogin() {
        console.log("Email: ", email)
        console.log("Password: ", password)
    }

    return (
        <div>
            <img src="" alt="" />
            <div>
                <h1>Log-in</h1>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="text" value={email} onChange={e => {setEmail(e.target.value)}}/>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                <p>Esqueceu sua senha? <a href="">clique aqui!</a></p>
                <button onClick={handleLogin}>Entrar</button>
                <p>Ainda não possui uma conta? <a href="/register">clique aqui!</a></p>
            </div>
        </div>
    )
}


export default Login