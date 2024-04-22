import styled from 'styled-components';

const ContainerComponent = styled.div`
  display: flex;
  height: 35px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #ffff;  
  box-shadow: 1px 1px 5px #51dbe8;
  padding: 0 0 0 20px;
  border-radius: 10px;    
`;

const Input = styled.input`
  color: #51dbe8;
  background-color: transparent;
  border: 0;
  outline: none;
  width: 100%;
  padding-right: 15px;
`;

const ContainerIcon = styled.div`
  padding-right: 20px;
`;

export {
  ContainerComponent,
  ContainerIcon,
  Input
};