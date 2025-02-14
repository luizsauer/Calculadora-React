import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(0, 0, 0);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color:rgb(30, 30, 30);
    width: 65%;
    min-height: 380px;
    padding: 7px;

`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`