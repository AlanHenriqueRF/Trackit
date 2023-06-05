import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../providers/LoginContext";
import axios from "axios";


export default function Footer() {
    const {habitoday,setHabitoday,user,percent, setPercent} = useContext(LoginContext);
    const [done, setDone] = React.useState('');

    useEffect(()=>{
        const config = {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config)
            .then((respota)=>{
                setPercent(((respota.data.filter((i)=>{if(i.done){return true}}).length)/(respota.data.length))*100);
                setDone([...respota.data].filter((item)=>{if (item.done){return item}}));
                setHabitoday(respota.data);
                })
            .catch((erro)=>{alert(erro.response.data.message)});
    },[])

    return (
        <Footerstyle>
            <Container data-test="menu">

                <div><Link to='/habitos' data-test="habit-link">Hábitos</Link></div>

                <div><Link to='/hoje' data-test="today-link"><CircularProgressbar
                    value={percent?percent:0}
                    text={`Hoje`}
                    styles={buildStyles({ 
                        textColor: '#FFFFFF',
                        textSize: '18px',
                        pathColor:'#FFFFFF',
                        trailColor: 'none',
                        pathTransitionDuration: 2,
                        strokeLinecap: 'round',
                        strokeWidth:100})}
                /></Link></div>

                <div><Link to='/historico' data-test="history-link">Histórico</Link></div>

            </Container>
        </Footerstyle>
    )
}
const Container = styled.div`
    display: flex;
    width:100vw;
    justify-content: space-between;
    align-items: center;

    div{
        color: #52B6FF;
        font-size:18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        margin: 0 33px;

        a{
            color: #52B6FF;
            font-size:18px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight:400;
            text-decoration:none;
            width:87%;
            height:87%;
            
        }
    }


    & div:nth-child(2){
        a{
            color:#FFFFFF;
            text-align:center;
            font-size:18px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight:400;
            text-decoration:none;
        }
        margin: 0px;
        width:91px;
        height:91px;
        background-color:#52B6FF;
        border-radius:175px;
        /* color:#FFFFFF;
        text-align:center; */
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:-47px;
    
    }
`

const Footerstyle = styled.div`
    display: flex;
    flex-wrap:wrap;
    position: fixed;
    bottom:0;
    width:100vw;
    height:70px;
    align-items: center;
    background-color:#FFFFFF;

`


