import styled from 'styled-components';

export const List = styled.div`
    @media(max-width: 750px) {
        padding: 0 8px;
    }
`;

export const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 16px;
    background-color: Transparent;
    cursor: pointer;
    width: 30%;

    &:hover {
        background-color: #04AA6D;
        color: white;
    }

    @media(max-width: 750px) {
        font-size: 14px;
        width: 100%;
        padding: 4px 10px
    }
`;

export const H2 = styled.h2`
    font-size: 28px;
    margin: 0;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    align-items: center;
`;

export const DesktopFilter = styled.div`
    display: flex;  
    height: 30px;
    align-items: center;
    width: 250px;

    @media(max-width: 750px) {
        display: none;
    }
`;

export const MobileFilter = styled.div`
    display: none;
    margin: 12px 0;
    height: 35px;

    @media(max-width: 750px) {
        display: flex;
        align-items: center;
    }
`;
