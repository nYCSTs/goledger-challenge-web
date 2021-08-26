import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    background-color: #04AA6D;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    justify-content: space-between;
    height: 68px;
    padding: 12px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: Transparent;
    border: none;
    padding: 6px;
`;

export const NavItem = styled.div`
    display: flex;
    width: 92px;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 8px;
`;

export const A = styled.a`
    text-decoration: none;
`;

export const Links = styled.div`
    display: flex;
    align-items: flex-end;
    width: 200px;
    justify-content: space-between;
`;

export const HomePageLink = styled(A)`
    font-size: 36px;
    font-weight: bold;
    color: black;
`;
