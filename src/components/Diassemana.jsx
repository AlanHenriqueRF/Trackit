import { useState } from "react"
import styled from "styled-components"

export default function Diassemana({ dia, setDays, id, days ,daysShow,idShow, active}) {
    const [clicou, setClicou] = useState(false);
    const [teste,setTeste] = useState(false);
    
    function clica() {
        if (setDays) {
            setClicou(!clicou)
            if (days.includes(id)) {
                days.splice(days.indexOf(id), 1)
                setDays(days)
            }
            else {
                setDays([...days, id])
            }
        }
    }

    return (
        <Button data-test="habit-day" onClick={clica} 
        disabled={active}
        color={(clicou ) ? '#FFFFFF' : ((daysShow)? (daysShow.includes(idShow)?'#FFFFFF':'#DBDBDB'):'#DBDBDB')}
        background={(clicou ) ? '#CFCFCF' : ((daysShow)? (daysShow.includes(idShow)?'#CFCFCF':'#FFFFFF'):'#FFFFFF')}
        border={(clicou ) ? '#CFCFCF' : ((daysShow)? (daysShow.includes(idShow)?'#D4D4D4':'#CFCFCF'):'#D4D4D4')}>{dia}</Button>
    )
}

const Button = styled.button`
    color:${props => props.color};
    background-color:${props => props.background};
    border:1px solid ${props => props.border};
    height:30px;
    width:30px;
    border-radius:5px;
    font-size:20px;
    text-align:center;
    font-family: 'Lexend Deca', sans-serif;
    margin:0 2px;
`