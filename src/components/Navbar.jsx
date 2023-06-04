import styled from "styled-components"
import bob from "./../assets/Rectangle 14.png"
import { useContext } from "react"
import { LoginContext } from "../providers/LoginContext"

export default function Navbar() {
    const {user} =  useContext(LoginContext)
    console.log(user)
    return (
        <Navbarstyle>
            <h1>TrackIt</h1>
            <div><img src={user.image} alt="imagePerfil" /></div>
            
        </Navbarstyle>
    )
}

const Navbarstyle = styled.div`
    display: flex;
    flex-wrap:wrap;
    width:100%;
    height:70px;
    position:fixed;
    top:0;
    background-color:#126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    align-items:center;
    justify-content:space-between;
    h1{
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-size:39px;
        font-weight:400;
        margin-left:18px;
    }

    div{
        width:51px;
        height:51px;
        border-radius:98px;
        margin-right:18px;
        img{
            width:100%;
            height:100%;
            border-radius:98px;
        }
    }

`