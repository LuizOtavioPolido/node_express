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
    width: 350px;
    height: 420px;
    background-color: #41644A;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const Input = styled.input`
    height: 30px;
    width: 90%;
    border-radius: 10px;
    background-color: #f0f0f0;
    border: none;
    font-size: 15px;
`

const Select = styled.select`
    height: 30px;
    width: 90%;
    border-radius: 10px;
    background-color: #f0f0f0;
    border: none;
    font-size: 15px;
`

const CreateTaskButton = styled.button`
    width: 250px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(30, 151, 73);
    margin-right: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export const TarefaStyled = {
    Container, 
    Card,
    Input,
    Select,
    CreateTaskButton
}