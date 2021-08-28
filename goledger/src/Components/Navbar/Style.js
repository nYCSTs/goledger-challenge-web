import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    background-color: #04AA6D;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 28px;
    height: 90px;

    @media(max-width: 500px) {
        flex-direction: column;
        height: auto;
    }
`;

export const Button = styled.button`
    background-color: Transparent;
    border: 1px solid black;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 8px;
`;

export const NavItem = styled.div`
`;

export const A = styled.a`
    
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 230px;
    align-items: flex-end;

    @media(max-width: 500px) {
        margin-top: 12px;
        width: auto;
    }
`;

export const HomePageLink = styled.a`
    font-size: 36px;
    font-weight: bold;
    color: black;
    text-decoration: none;
`;
