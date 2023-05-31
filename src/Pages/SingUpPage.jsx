import Logo from './../assets/Logo_PNG.png'
import { Link } from 'react-router-dom'

export default function SingUpPage() {
    return (
        <>
            <img src={Logo} alt="Logo" />

            <input type="email" />
            <input type="password" />
            <input type="text" />
            <input type="url" />

            <button>Cadastrar</button>

            <Link to='/'>
                Já tem uma conta? Faça login!
            </Link>
        </>
    )
}