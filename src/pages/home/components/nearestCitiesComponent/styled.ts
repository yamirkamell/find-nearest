import styled from 'styled-components';

const ContainerRoot = styled.div`
    margin-top: 50px;
`;

const TitleComponent = styled.span`
    color: #51dbe8;
    font-size: 18px;
`;

const ContainerNearestCities = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;

const ListComponent = styled.li`
    color: #51dbe8;
    font-size: 18px;
`;

const SubTitleComponent = styled.span`
    color: #9B9B9B;
    font-size: 18px;
`;

export {
    ContainerRoot,
    TitleComponent,
    ContainerNearestCities,
    ListComponent,
    SubTitleComponent
};
    