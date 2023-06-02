import styled from "styled-components"

export default function Footer() {
    return (
        <Footerstyle>
            <Container>
                <div>Hábitos</div>
                <div>Hoje</div>
                <div>Histórico</div>
            </Container>
        </Footerstyle>
    )
}
const Container= styled.div`
    display: flex;
    width:100vw;
    justify-content: space-between;
    align-items: flex-end;

    div{
        color: #52B6FF;
        font-size:18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        position:relative;
        margin: 0 33px;
    }


    & div:nth-child(2){
        margin: 0px;
        width:91px;
        height:91px;
        background-color:#52B6FF;
        border-radius:175px;
        color:#FFFFFF;
        text-align:center;
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        bottom:10px;
        left: 46%;
        /* right: 61%; */
        /* display:none; */
        /* left:calc(100vw - 65vw); */
        /* margin-left:142px; */
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
    /* justify-content:space-between; */
    

`


