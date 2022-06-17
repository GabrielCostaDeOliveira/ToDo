import styled from "styled-components";

const c1 = [255, 118, 22, 1]

export const TodoRow = styled.div<{typeColor:number}>`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;
    
    background: linear-gradient(
    90deg,
    ${p => ['rgba(255, 118, 20, 1)', ' rgba(93, 12, 255, 1)', ' rgba(255, 12, 241, 1)' , 'rgba(20, 159, 255, 1) '][p.typeColor%4]},
    ${p => ['rgba(255,  84, 17, 1)', ' rgba(155, 0, 250, 1)', ' rgba(250,  0, 135, 1) ' ,'rgba(17, 122, 255, 1) '][p.typeColor%4]}
    );

    padding: 16px;
    border-radius: 5px;
    width: 90%;


    &:hover{
        background: linear-gradient(
        90deg,
        ${p => ['rgba(255, 118, 20, 0.7)', ' rgba(93, 12, 255, 0.7)', ' rgba(255, 12, 241, 0.7)' , 'rgba(20, 159, 255, 0.7) '][p.typeColor%4]},
        ${p => ['rgba(255,  84, 17, 0.7)', ' rgba(155, 0, 250, 0.7)', ' rgba(250,  0, 135, 0.7) ' ,'rgba(17, 122, 255, 0.7) '][p.typeColor%4]}
        );

    }


`

export const DivIcons = styled.div`
    display: flex;
    align-items: center;
    font-size: 26px;
    cursor: pointer;

`