import styled from 'styled-components';

export const Field = styled.div`
    background-color: rgba(235,235,235,0.5);
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 12px;
    border: 1px solid rgba(0,0,0,0.3);
`;

export const ArtistInfo = styled.p`
    font-size: 18px;
    margin-right: 10px;
    font-weight: bold;
    width: 120px;
`;

export const P = styled.p`
    font-size: 15px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: Transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
`;

export const Tools = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;    
    width: 30px;
    align-items: center;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const A = styled.a`
    border: 2px solid red;
    border-radius: 4px;
    padding: 2px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    white-space: nowrap;
    font-size: 13px;
    width: min-content;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-right: 12px;
    align-items: center;

    @media(max-width: 500px) {
        flex-direction: column;
    }
`;
