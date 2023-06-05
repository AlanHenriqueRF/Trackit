import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import check from '../../assets/vector.png';
import React from "react";


export default function Hoje() {
    return (
        <>
            <Navbar />
            <Actiontoday>
                <Todaystyle>
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </Todaystyle>

                <TempleteToday>
                    <div>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: 3 dias<br/>Seu recorde: 5 dias</p>
                    
                    </div>
                    <button><img src={check} alt="check" /></button>
                </TempleteToday>
            </Actiontoday>
            <Footer />
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
    h1{
        color:#126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight:400;
        margin-left:17px;
        margin-bottom:2px;
    }
    h2{
        color:#BABABA;
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        margin-left:17px;
        font-size:18px;
    }
`

const TempleteToday = styled.div`
    height:94px;
    margin: 28px 17px 10px 18px;
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
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius:5px;
        margin-right:13px;
    }





`