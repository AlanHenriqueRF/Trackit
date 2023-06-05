import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useContext, useState } from "react";
import { LoginContext } from "../../providers/LoginContext";
import dayjs from "dayjs";
import Todayhabits from "../../components/Todayhabits";



export default function Hoje() {
    const { habitoday, percent} = useContext(LoginContext);


    const today = dayjs().format('DD/MM')
    
    return (
        <>
            <Navbar />
            <Actiontoday>
                <Todaystyle color={(!percent || percent===0)? '#BABABA':'#8FC549'}>
                    <h1 data-test="today">Segunda, {today}</h1>
                    <h2 data-test="today-counter">{(!percent || percent===0)? 'Nenhum hábito concluído ainda':`${percent}% dos hábitos concluídos`}</h2>
                </Todaystyle>

                
                    {habitoday.map((item) => {
                        return (<Todayhabits key={item.id} item ={item} />
                        )
                    })}

            </Actiontoday>
            <Footer percent={percent} />
        </>
    )
}

const Actiontoday = styled.div`
    background-color:#E5E5E5;
    padding-top: 70px;
    height:100vh;
    padding-bottom:70px;
`

const Todaystyle = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:28px;
    margin-bottom:28px;
    h1{
        color:#126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight:400;
        margin-left:17px;
        margin-bottom:2px;
    }
    h2{
        color: ${props=>props.color};
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        margin-left:17px;
        font-size:18px;
    }
`

