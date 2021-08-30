import styled from 'styled-components';

export const Multi = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 750px) {
        flex-direction: column;
    }
`;

export const Select = styled.select`
    border: thin solid rgba(77, 77, 77, 0.3);
    padding: 5px 0;
    border-radius: 4px;
    outline: none;
    background-color: white;
    width: 68px;
`;

export const InputDiv = styled.div`
    width: 45%;    

    @media(max-width: 750px) {
        width: 100%;
    }
`;
