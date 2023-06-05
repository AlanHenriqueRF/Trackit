import dump from './../assets/dump.svg'
import styled from 'styled-components'
import Diassemana from './Diassemana'
import { LoginContext } from '../providers/LoginContext'
import { useContext } from 'react';
import axios from 'axios'

export default function Habito({lista_dias,lista_habitos,habitos,setHabitos}){
    const { user } = useContext(LoginContext);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function delethabit(){
        if (confirm('Deseja mesmo deletar habito ?')){
            habitos = habitos.filter(i=>{if (i.id!==lista_habitos.id){return true}})
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${lista_habitos.id}`, config)
                .then(()=>(setHabitos(habitos)))
                .catch((erro)=>console.log(erro.data.message))
        }
    }
    return (
        <TempleteHabit>
            <div>
                <h1>{lista_habitos.name}</h1>
                <div>{lista_dias.map((dia, i) => <Diassemana key={i} dia={dia} idShow={i} daysShow={lista_habitos.days} active={true}/> )}</div> {/* <button key={i}>{dia}</button> */}
            </div>
            <img  onClick={delethabit} src={dump} alt="Lixeira"/>
        </TempleteHabit>
    )

}


const TempleteHabit = styled.div`
    height: 91px;
    margin: 20px 17px 0px 17px;
    background-color: #FFFFFF;
    border-radius:5px;
    box-sizing:0 1px 1px black;
    display: flex;
    flex-wrap:wrap;

    & div:nth-child(1){
        display: flex;
        flex-direction: column;
        margin-top:13px;
        margin-left:15px;
        h1{
            font-family: 'Lexend Deca', sans-serif;
            font-weight:400;
            font-size:20px;
            color: #666666;
            margin-bottom:10px;
        }

        
        div{
            
            display: flex;
            flex-wrap:wrap;
        }
    }

    img{
        color:#666666;
        width:13px;
        height:15px;
        margin-left:69px;
        margin-top:11px;
    }
`