import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    justify-content: center;
    padding: 5px 0;

    font-size: 24px;
    font-family: 'Roboto';
    span {
        font-size: 20px;
        font-family: 'Roboto';
        color: rgba(255, 255, 255, 0.7);
        margin: 5px 15px;
    }

    input {
        width: 100%;
        height: 70px;
        background-color: rgb(25, 25, 25);
        border: 0;
        padding-right: 5px;
        font-size: 36px;
        font-family: 'Roboto';
        color: #fff;
        text-align: right;
    }
`