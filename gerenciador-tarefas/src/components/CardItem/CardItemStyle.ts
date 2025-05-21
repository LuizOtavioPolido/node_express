import styled from "styled-components";

const CardContainer = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardContent = styled.div`
    background-color: #096B68;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    z-index: 2;
    /* border: 5px solid #000; */
`

const RemoveTaskButton = styled.button`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFBDE;
    margin-right: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    z-index: 1;
`

export const CardItemStyled = {
    CardContainer,
    RemoveTaskButton,
    CardContent
}

