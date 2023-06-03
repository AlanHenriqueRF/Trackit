import styled from "styled-components"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import plus from "./../../assets/plus.svg"

export default function Habitos() {
    const lista_dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    // quando cadastra, ou quando não possui nenhum hábito salvo retorna esse:
    // return (
    //     <>
    //         <Navbar />
    //         <ActionHabitts>
    //             <Habittsstyle>
    //                 <h1>Meus hábitos</h1>
    //                 <button><img src={plus} alt="plus" /></button>
    //             </Habittsstyle>
    //             <p>Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!</p>
    //         </ActionHabitts>
    //         <Footer />

    //     </>
    // )


    // se clicar no mais tem que retornar esse: pois vai cadastrar um novo habito, porém se ja tiver algun cadastrado
    // deve ser analisado uma tela sem o p quer informa ao usuario que não possui hábitos algum
    return (
        <>
            <Navbar />
            <ActionHabitts>
                <Habittsstyle>
                    <h1>Meus hábitos</h1>
                    <button><img src={plus} alt="plus" /></button>
                </Habittsstyle>
                <TempleteCreat>
                    <form>
                        <input type="text" placeholder="nome do hábito" />
                        <div>
                            {lista_dias.map((dia, i) => <button key={i}>{dia}</button>)}
                        </div>

                    </form>

                    <Styleputhabit>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </Styleputhabit>
                </TempleteCreat>

            </ActionHabitts>
            <Footer />

        </>
    )

}

const ActionHabitts = styled.div`
    background-color:#E5E5E5;
    padding-top: 70px;
    height:100vh;
    padding-bottom:70px;
    p{
        color: #666666;
        font-size:18px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight:400;
        margin-top:28px;
        margin:28px 17px 0px 20px
    }
`

const Habittsstyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content:space-between;
    margin-top:28px;
    h1{
        color:#126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size:23px;
        font-weight:400;
        margin-left:17px;
    }
    button{
        background-color:#52B6FF;
        border-radius:5px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:40px;
        height:35px;
        border:none;
        margin-right:18px;
    }
`

const TempleteCreat = styled.div`
    height:180px;
    margin: 20px 17px 0px 17px;
    background-color: #FFFFFF;
    border-radius:5px;
    box-sizing:0 1px 1px black;

    form{
        display: flex;
        flex-direction: column;
        /* flex-wrap:wrap; */

        input{
            background-color: #FFFFFF;
            border: 1px solid #D4D4D4;
            border-radius:5px;
            padding:0px 11px;
            height:43px; 
            font-size:20px;
            font-family: 'Lexend Deca', sans-serif;
            margin:18px 18px 10px 18px;

            &::placeholder{
                color: #DBDBDB;
            }
        }
        
        div{
            margin-left:17px;
            button{
                background-color:#FFFFFF;
                height:30px;
                width:30px;
                border-radius:5px;
                border:1px solid #D4D4D4;
                color:#DBDBDB;
                font-size:20px;
                text-align:center;
                font-family: 'Lexend Deca', sans-serif;
                margin:0 2px
            }
        }

    }

`

const Styleputhabit = styled.div`
    margin-right:16px;
    margin-top:23px;
    display:flex;
    justify-content:flex-end;
    button{
            width:84px;
            height:35px;
            font-size:16px;
            font-family: 'Lexend Deca', sans-serif;
            font-weight:400;
            text-align:center
        }

    & :nth-child(1){
        color: #52B6FF;
        border: none;
        background-color: #FFFFFF;
    }

    & :nth-child(2){
        color: #FFFFFF;
        border: none;
        border-radius:5px;
        background-color: #52B6FF;
    }

`