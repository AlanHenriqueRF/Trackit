import { Link } from 'react-router-dom'
import Logo from './../assets/Logo_PNG.png'

export default function SingInPage() {
    return (
        <>
            <img src={Logo} alt='Logo' />

            <input type="email" />
            <input type="password" />

            <button>Entrar</button>
            <Link to='/cadastro'>
                Não tem uma conta? Cadastre-se!
            </Link>
        </>
    )
}