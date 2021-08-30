import styled from 'styled-components';

export const List = styled.div`
    @media(max-width: 750px) {
        padding: 0 8px;
    }
`;

export const Button = styled.button`
    border: 1px solid #F6F6F6;
    color: #F6F6F6;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 16px;
    background-color: Transparent;
    cursor: pointer;
    width: 30%;
    font-weight: bold;

    &:hover {
        background-color: #DBE2EF;
        border: 1px solid #DBE2EF;
        color: black;
    }

    @media(max-width: 750px) {
        font-size: 14px;
        width: 100%;
        padding: 4px 10px
    }
`;

export const H2 = styled.h2`
    font-size: 32px;
    margin: 0;

    @media(max-width: 750px) {
        font-size: 26px;
    }
`;

export const Title = styled.div`
    display: flex;
    color: #F6F6F6;
    justify-content: space-between;
    margin-bottom: 18px;
    align-items: center;
`;

export const DesktopFilter = styled.div`
    display: flex;  
    height: 30px;
    align-items: center;
    width: 320px;

    @media(max-width: 750px) {
        display: none;
    }
`;

export const MobileFilter = styled.div`
    display: none;
    margin: 12px 0;
    height: 35px;
    color: #F6F6F6;

    @media(max-width: 750px) {
        display: flex;
        align-items: center;
    }
`;
