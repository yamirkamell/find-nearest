import styled from 'styled-components';

const ContainerRoot = styled.div`
    width: 35%; 
    height: 80%;
    @media (max-width: 795px) {
        width: auto;
    } 
`;

const ContainerHeader = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
`;

export {
    ContainerRoot,
    ContainerHeader
};
    