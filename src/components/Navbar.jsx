import styled from "styled-components"
import bob from "./../assets/Rectangle 14.png"

export default function Navbar() {
    return (
        <Navbarstyle>
            <h1>TrackIt</h1>
            <div><img src={bob} alt="imagePerfil" /></div>
            
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