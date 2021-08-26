import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    height: 56px;
    background-color: #04AA6D;
    align-items: flex-end;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    margin-bottom: 24px;
`;

export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    margin: 0 8px;

`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: Transparent;
    border: none;
    padding: 0;
    
`;

export const NavItem = styled.div`
    margin-right: 14px;
    width: 92px;
    align-items: center;
`;

export const P = styled.p`
    margin: 0;
`;

export const Dropdown = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 8px;
    padding: 6px;
`;

export const A = styled.a`
    text-decoration: none;
    color: black;
`;

export const Links = styled.div`
    display: flex;
`;

export const DropdownDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 12px;
    border: 1px solid black;
    margin: 0;
    width: min-content;
    white-space: nowrap;
    padding: 6px 0;
`;

export const HomePageLink = styled(A)`
    font-size: 28px;
    font-weight: bold;
`;

export const DropdownItem = styled(A)`
    padding: 6px;
    color: black;
    font-size: 14px;
`;
