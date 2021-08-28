import styled from 'styled-components';

export const Page = styled.div`
`;

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    background-color: Transparent;
    cursor: pointer;

    &:hover {
        background-color: #04AA6D;
        color: white;
    }

    @media(max-width: 500px) {
        font-size: 14px;
        width: 80px;
    }
`;

export const Listing = styled.div`
`;

export const H2 = styled.h2`
    font-size: 28px;
    margin: 0;
`;

export const A = styled.a`

`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    align-items: center;
`;
