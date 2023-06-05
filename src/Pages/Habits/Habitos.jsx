import styled from "styled-components"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import plus from "../../assets/plus.svg"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../providers/LoginContext"
import axios from "axios"
import Habito from "../../components/Habito"
import Diassemana from "../../components/Diassemana"
import { ThreeDots } from "react-loader-spinner"

export default function Habitos() {
    const lista_dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [days, setDays] = useState([])
    const [habitos, setHabitos] = useState([{}])
    const { user } = useContext(LoginContext)
    const [templete, setTemplete] = useState(true)
    const [name, setName] = useState('')
    const [active, setActive] = useState(false)


    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)

        promise.then((resposta) => {
            setHabitos(resposta.data)
        })
        promise.catch((erro) => console.log(erro.response.data.message)) // ALERT
    }, [])


    function showcreatehabit() {
        setTemplete(!templete)
        setActive(false)
    }


    function createhabit(e) {
        e.preventDefault();
        // console.log('oi')
    }


    function saveInApi() {
        setActive(true);
        setName('');
        const body = {
            name: name,
            days: days
        };
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
            .then((resposta) => {
                setHabitos([...habitos, resposta.data])
                setTemplete(!templete);

            })
            .catch((erro) => {
                setActive(false)
                alert(erro.response.data.message)
            })//  ALERT
    }

    function Cancela(){
        setTemplete(!templete);

    }
    return (
        <>
            <Navbar />
            <ActionHabitts>
                <Habittsstyle>
                    <h1>Meus hábitos</h1>
                    <button onClick={showcreatehabit} data-test="habit-create-btn" ><img src={plus} alt="plus" /></button>
                </Habittsstyle>

                {templete ?
                    <></> :
                    <TempleteCreat onSubmit={createhabit} data-test="habit-create-container">
                        <div >
                            <input test="habit-name-input" disabled={active} type="text" placeholder="nome do hábito" value={name} onChange={(e) => setName(e.target.value)} required />
                            <div>
                                {lista_dias.map((dia, i) => <Diassemana key={dia.id} type="subimit" dia={dia} id={i} active={active} setDays={setDays} days={days} />)}
                            </div>

                        </div>

                        <Styleputhabit>
                            <button data-test="habit-create-cancel-btn" type="subimit" onClick={Cancela} disabled={active} opacity={active ? '70%' : 'none'}>{active ? <ThreeDots /> : 'Cancelar'}</button>
                            <button data-test="habit-create-save-btn" type="submit" onClick={saveInApi} disabled={active} opacity={active ? '70%' : 'none'}> {active ? <ThreeDots /> : 'Salvar'}</button>
                        </Styleputhabit>
                    </TempleteCreat>
                }


                {habitos.length === 0 ?
                    <p>Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!</p> :
                    habitos.map(item => <Habito key={item.id} lista_dias={lista_dias} lista_habitos={item} habitos={habitos} setHabitos={setHabitos} />)}
            </ActionHabitts>
            <Footer />

        </>
    )

}

const ActionHabitts = styled.div`
    background-color:#E5E5E5;
    padding-top: 70px;
    height:100vh;
    padding-bottom:70px;
    p{
        color: #666666;
        font-size:18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        margin-top:28px;
        margin:28px 17px 0px 20px
    }
`

const Habittsstyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content:space-between;
    margin-top:28px;
    h1{
        color:#126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight:400;
        margin-left:17px;
    }
    button{
        background-color:#52B6FF;
        border-radius:5px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:40px;
        height:35px;
        border:none;
        margin-right:18px;
    }
`

const TempleteCreat = styled.form`
    height:180px;
    margin: 20px 17px 0px 17px;
    background-color: #FFFFFF;
    border-radius:5px;
    box-sizing:0 1px 1px black;

    & div:nth-child(1){
        display: flex;
        flex-direction: column;
        /* flex-wrap:wrap; */

        input{
            background-color: #FFFFFF;
            border: 1px solid #D4D4D4;
            border-radius:5px;
            padding:0px 11px;
            height:43px; 
            font-size:20px;
            font-family: 'Lexend Deca', sans-serif;
            margin:18px 18px 10px 18px;

            &::placeholder{
                color: #DBDBDB;
            }
        }
        
        div{
            margin-left:17px;
            
        }

    }

`

const Styleputhabit = styled.div`
    margin-right:16px;
    margin-top:23px;
    display:flex;
    justify-content:flex-end;
    button{
            width:84px;
            height:35px;
            font-size:16px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight:400;
            text-align:center;
            opacity: ${props => props.opacity};
            div{
                display:flex;
                align-items:center;
                justify-content:center;
                svg{
                    width:43px;
                    height: 11px;
                    fill:#FFFFFF;
                    background-color: none;
                }
            }
        }

    & button:nth-child(1){
        color: #52B6FF;
        border: none;
        background-color: #FFFFFF;
    }

    & button:nth-child(2){
        color: #FFFFFF;
        border: none;
        border-radius:5px;
        background-color: #52B6FF;
    }

`