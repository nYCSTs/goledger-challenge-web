import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    background-color: #04AA6D;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    justify-content: space-between;
    height: 68px;
    padding: 12px;
    margin-bottom: 28px;
`;

export const Button = styled.button`
    display: flex;
    background-color: Transparent;
    border: none;
    cursor: pointer;
    padding: 6px 10px;
    text-align: center;
`;

export const NavItem = styled.div`
    border: 1px solid black;
    border-radius: 8px;
`;

export const A = styled.a`
    text-decoration: none;
`;

export const Links = styled.div`
    display: flex;
    align-items: flex-end;
    width: 150px;
    justify-content: space-between;
`;

export const HomePageLink = styled(A)`
    font-size: 36px;
    font-weight: bold;
    color: black;
`;
