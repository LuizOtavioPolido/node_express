import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBDBDB;
`   

const Card = styled.div`
    width: 450px;
    height: 320px;
    background-color: #41644A;
`

const ButtonDiv = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const AddButton = styled.button`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4E6688;
    margin-right: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

const ListDiv = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    background-color: #f00;
    flex-direction: column;
`

export const ListagemTarefasStyled = {
    Container,
    Card,
    ButtonDiv,
    AddButton,
    ListDiv
}