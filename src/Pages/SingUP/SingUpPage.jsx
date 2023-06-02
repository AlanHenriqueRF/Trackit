import Logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function SingUpPage() {
    return (
        <PagesingUP>
            <img src={Logo} alt="Logo" />

            <FormsingUP>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='senha' />
                <input type="text" placeholder='nome' />
                <input type="url" placeholder='foto' />


                <button>Cadastrar</button>

            </FormsingUP>

            <Link to='/'>
                Já tem uma conta? Faça login!
            </Link>
        </PagesingUP>
    )
}


const PagesingUP = styled.div`
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

const FormsingUP = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:303px;
    height: calc(100vh - calc(100vh - 249px));
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