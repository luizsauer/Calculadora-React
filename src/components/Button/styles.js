import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border-radius: 5px;
    border: 1.9px solid #101010;
    background-color: ${(props) => props.bgColor || '#303030'};
    color: ${(props) => props.color || '#fff'};
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    flex: 1;
    height: 53px;

    &:hover {
        opacity: 0.6;
    }
`