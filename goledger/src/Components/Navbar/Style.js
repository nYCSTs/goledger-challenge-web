import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    background-color: #F6F6F6;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 28px;
    align-items: center;
    width: 100%;

    @media(max-width: 750px) {
        flex-direction: column;
        height: auto;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        align-items: stretch;
        padding: 10px 5px;
    }
`;

export const Button = styled.button`
    background-color: Transparent;
    border: 1px solid black;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: bold;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 260px;

    @media(max-width: 750px) {
        margin-top: 12px;
        width: auto;
    }
`;

export const HomePageLink = styled.a`
    font-size: 36px;
    font-weight: bold;
    color: black;
    text-decoration: none;

    @media(max-width: 750px) {
        font-size: 28px;
    }
`;
