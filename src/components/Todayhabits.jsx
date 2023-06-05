import { useContext, useState } from "react"
import { LoginContext } from "../providers/LoginContext"
import axios from "axios";
import check from '../assets/check.svg';
import styled from "styled-components";

export default function Todayhabits({ item }) {
    const [marked,setMarked] = useState(false)
    
    const {user, habitoday,setPercent} = useContext(LoginContext);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }


    function done(index){
        const body ={};
        if (marked===false){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}/check`,body , config)
                .then(()=>{
                    const p = (((habitoday.filter((i)=>{if(i.done){return true}}).length)+1)/(habitoday.length)*100)
                    setMarked(true)
                    setPercent(p)})

        }
    }

    return (
        <TempleteToday color={(marked || item.done)? '#8FC549':'#EBEBEB'} border ={(marked || item.done)? 'none':'#E7E7E7'}>
            <div>
                <h1>{item.name}</h1>
                <p>Sequência atual: {item.currentSequence} dias<br />Seu recorde: {item.highestSequence} dias</p>
            </div>
            <button onClick={() => done(item.id)}>
                <img src={check} alt="check" />
            </button>
        </TempleteToday>
    )
}

const TempleteToday = styled.div`
    height:94px;
    margin: 5px 17px 5px 18px;
    background-color: #FFFFFF;
    border-radius:5px;
    box-sizing:0 1px 1px black;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;

    & div{
        margin-left:15px;
        h1{
            color: #666666;
            font-family: 'Lexend Deca', sans-serif;
            font-size:20px;
            font-weight:400;
            margin-bottom:7px;
        }
        p{
            color:#666666;
            font-family: 'Lexend Deca', sans-serif;
            font-size:13px;
            font-weight:400;
            /* margin-bottom:7px; */
        }
    }

    & button{
        width:69px;
        height:69px;
        background-color: ${props=>props.color};
        border: 1px solid ${props=>props.border};
        border-radius:5px;
        margin-right:13px;
    }





`