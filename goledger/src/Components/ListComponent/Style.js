import styled from 'styled-components';

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    background-color: Transparent;
    cursor: pointer;
    width: 200px;

    &:hover {
        background-color: #04AA6D;
        color: white;
    }

    @media(max-width: 500px) {
        font-size: 14px;
        width: 80px;
    }
`;

export const H2 = styled.h2`
    font-size: 28px;
    margin: 0;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    align-items: center;
`;
