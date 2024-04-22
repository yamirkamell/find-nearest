import styled from 'styled-components';

const ContainerMain = styled.div`
    background-color: #f4f4f4;
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const ContainerChildren = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 20px 20px 20px;
    padding: 20px 40px;
    background-color: #FFFF;
    border-radius: 10px;
    @media (max-width: 500px) {
        width: 75%;
    } 
    @media (max-width: 470px) {
        width: 74%;
    }
    @media (max-width: 430px) {
        width: 72%;
    }      
    @media (max-width: 390px) {
        width: 70%;
    }
    @media (max-width: 370px) {
        width: 68%;
    }  
    @media (max-width: 340px) {
        width: 65%;
    }         
`;

export {
    ContainerMain,
    ContainerChildren
  };
  