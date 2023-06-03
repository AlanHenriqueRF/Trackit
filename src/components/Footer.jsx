import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    return (
        <Footerstyle>
            <Container>

                <div><Link to='/habitos'>Hábitos</Link></div>



                <div><Link to='/hoje'>Hoje</Link></div>



                <div><Link to='/historico'>Histórico</Link></div>

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


