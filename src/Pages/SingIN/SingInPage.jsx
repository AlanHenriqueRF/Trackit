import { Link } from 'react-router-dom'
import Logo from './../../assets/logo.svg'
import styled from 'styled-components'

export default function SingInPage() {
    return (
        <PagelogIN>

            <img src={Logo} alt='Logo' />
            <FormlogIn>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <button>Entrar</button>
            </FormlogIn>

            <Link to='/cadastro' >
                Não tem uma conta? Cadastre-se!
            </Link>
        </PagelogIN>
    )
}


const PagelogIN = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    padding:68px;
    img{
        width:180px;
    }
    a {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        font-size:14px;
        text-align:center;
        text-decoration-color:#52B6FF;
    }
`

const FormlogIn = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:303px;
    height: calc(100vh - calc(100vh - 147px));
    margin-top:33px;
    margin-bottom:25px;
    input{
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius:5px;
        padding:0px 11px;
        height:43px; 
        font-size:20px;
        font-family: 'Lexend Deca', sans-serif;
        
        &::placeholder{
            color: #DBDBDB;
        }
    }
    button{
        background-color:#52B6FF;
        height:45px;
        border-radius:5px;
        border:none;
        color:#FFFFFF;
        font-size:21px;
        text-align:center;
        font-family: 'Lexend Deca', sans-serif;

    }

`
