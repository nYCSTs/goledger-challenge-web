import styled from 'styled-components';

export const Data = styled.div`
    background-color: rgba(235,50,50,0.7);
    border-radius: 12px;
    padding: 8px;
    border: 1px solid rgba(0,0,0,0.3);
    margin-bottom: 12px;
    height: 320px;
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
