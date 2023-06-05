import { useState } from "react"
import styled from "styled-components"

export default function Diassemana({dia, setDays ,id,days}){
    const [clicou,setClicou] = useState(false);

    function clica(){
        setClicou(!clicou)
        if (days.includes(id)){
            days.splice(days.indexOf(id),1)
            setDays(days)
        }
        else{
            setDays([...days,id])
        }
    }
    return (
        <Button data-test="habit-day" onClick={clica} color={clicou?'#FFFFFF':'#DBDBDB'} background={clicou?'#CFCFCF':'#FFFFFF'} border={clicou?'#CFCFCF':'#D4D4D4'}>{dia}</Button>
    )
}

const Button = styled.button`
    color:${props=>props.color};
    background-color:${props=>props.background};
    border:1px solid ${props=>props.border};
    height:30px;
    width:30px;
    border-radius:5px;
    font-size:20px;
    text-align:center;
    font-family: 'Lexend Deca', sans-serif;
    margin:0 2px;
`