import styled from 'styled-components';

export const Form = styled.div`
    margin: 52px auto;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 26px;
    width: 50%;

    @media(max-width: 850px) {
        width: 80%;
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`;

export const ChildDiv = styled.div`
    margin: 16px 0;
`;

export const Button = styled.button`
    background-color: Transparent;
    border: 1px solid #04AA6D;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;

    &:hover {
        background-color: #04AA6D;
    }
`;

export const H1 = styled.h1`
    margin: 0;
`;
