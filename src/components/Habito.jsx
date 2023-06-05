import dump from './../assets/dump.svg'
import styled from 'styled-components'
import Diassemana from './Diassemana'

export default function Habito({lista_dias,lista_habitos}){

    return (
        <TempleteHabit>
            <div>
                <h1>{lista_habitos.name}</h1>
                <div>{lista_dias.map((dia, i) => <Diassemana key={i} dia={dia} id={i} days={lista_habitos.days}/>)}</div>
            </div>
            <img src={dump} alt="Lixeira"/>
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
            /* flex-direction:line; */
            flex-wrap:wrap;
            button{
                background-color:#FFFFFF;
                height:30px;
                width:30px;
                border-radius:5px;
                border:1px solid #D4D4D4;
                color:#DBDBDB;
                font-size:20px;
                text-align:center;
                font-family: 'Lexend Deca', sans-serif;
                margin:0 2px
            }
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