import styled from 'styled-components';

export const Title = styled.p`
    font-size: 32px;
    margin: 18px 0;
`;

export const InformationTitle = styled.p`
    font-size: 22px;
    margin: 0;
    font-weight: bold;
`;

export const ArtistData = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: #DBE2EF;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(0,0,0,0.3);
    width: 80%;

    @media(max-width: 750px) {
        width: 95%;
    }
`;
