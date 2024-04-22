import styled from 'styled-components';

const ContainerTable = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 35%;
    overflow-y: scroll;
    overflow-x: hidden;
    @media (max-width: 490px) {
        overflow-x: scroll;
    } 
    #titles{
        span{
            font-weight: bold;
            color: #51dbe8;
        }
    }
    #data{
        cursor: pointer;
    }
`;

const ContainerTitles = styled.div`
    display: grid;
    grid-template-columns: 75% 20%;
    align-items: center; 
    width: 100%;
    #center{
        text-align: center;
    }
    #icon{
        color: #51dbe8;
    }
    @media (max-width: 490px) {
    width: 120%;
    } 
`;

const TextComponent = styled.span`
    text-align: start;
    color: #9B9B9B;
    padding-left: 20px;
`;

const DividerComponent = styled.hr`
  width: 100%;
  border: 1px solid #f4f4f4;
  @media (max-width: 490px) {
    width: 120%;
  } 
`;

export {
    ContainerTable,
    ContainerTitles,
    TextComponent,
    DividerComponent,
};
    