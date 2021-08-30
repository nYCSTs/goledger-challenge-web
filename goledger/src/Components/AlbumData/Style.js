import styled from 'styled-components';

export const Data = styled.div`
    background-color: #3F72AF;
    border-radius: 12px;
    padding: 8px;
    border: 1px solid rgba(0,0,0,0.3);
    margin-bottom: 12px;
`;

export const Information = styled.p`
    display: flex;
    margin: 10px 0;
    align-items: center;
    font-size: 16px;

`;

export const AlbumTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    width: 120px;

    @media(max-width: 575px) {
        width: auto;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90px;
`;

export const StreamingServicesList = styled.div`
    background-color: blue;
`;

export const StreamService = styled.p`
border: 1px solid black;
font-size: 12px;

`;
