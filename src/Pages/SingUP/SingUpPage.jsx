import { useState } from 'react'
import Logo from './../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'

export default function SingUpPage() {
    const [email,setEmail]= useState('');
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [password, setPassword]= useState('');
    const [active,setActive] =useState(false);

    const navigate = useNavigate()

    function SingUpPost(e){
        e.preventDefault()
        setActive(true)
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{email, name, image, password})
            .then((resposta)=>{navigate('/')})
            .catch((erro)=>{
                alert(erro.response.data.message)
                setActive(false)})
    }

    return (
        <PagesingUP>
            <img src={Logo} alt="Logo" />

            <FormsingUP onSubmit={SingUpPost}>
                <input disabled={active} type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input disabled={active} type="password" placeholder='senha' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <input disabled={active} type="text" placeholder='nome' value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input disabled={active} type="url" placeholder='foto' value={image} onChange={(e)=>setImage(e.target.value)} required/>

                
                <Button type='subimit' disabled={active} opacity ={active ? '70%':'none'}>{active? <ThreeDots />: 'Cadastrar'}</Button>

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

`

const Button = styled.button`
    background-color:#52B6FF;
    height:45px;
    border-radius:5px;
    border:none;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:${props=>props.opacity};
    font-size:21px;
    text-align:center;
    font-family: 'Lexend Deca', sans-serif;
    div{
        svg{
        width:51px;
        height: 13px;
        fill:#FFFFFF;}
    }
`

