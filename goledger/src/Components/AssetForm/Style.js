import styled from 'styled-components';

export const Form = styled.div`
    margin: 52px auto;
    border: 1px solid white;
    padding: 26px;
    width: 50%;
    color: white;
    border-radius: 6px;

    @media(max-width: 750px) {
        width: 90%;
    }
`;

export const ChildDiv = styled.div`
    margin: 16px 0;
`;

export const Button = styled.button`
    background-color: Transparent;
    border: 1px solid #FEA82F;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
    color: white;
    font-size: 15px;

    &:hover {
        background-color: #FEA82F;
        color: black;
    }
`;

export const H1 = styled.h1`
    margin: 0;
`;
