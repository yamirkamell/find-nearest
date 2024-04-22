import React from 'react';
import { ContainerLoader, ContainerTable, ContainerTitles, DividerComponent, TextComponent } from './styled';
import ReactLoading from 'react-loading';

interface Props {
    initialCities: any,
    hasMore: boolean,
    searchValue: string,
    elementRef: any,
    handleSelectCity: any
}

const CitiesComponent = ({initialCities, hasMore, searchValue, elementRef, handleSelectCity} : Props) => {

  return (
      <ContainerTable>
          <ContainerTitles id='titles'>
            <TextComponent> Nombre </TextComponent>
            <TextComponent id='center'> Country </TextComponent>            
          </ContainerTitles>
          <DividerComponent />
          {initialCities?.map((item: any, index: number) => (
            <div key={index}>
            <ContainerTitles id='data' onClick={()=>{handleSelectCity({...item, index: index})}}>
                <TextComponent id='name'> {item.name} </TextComponent>
                <TextComponent id='center'> {item.country} </TextComponent>
            </ContainerTitles>
            <DividerComponent />
            </div>
          ))}
        {!hasMore || searchValue === '' ? 
        <ContainerLoader role="loader" ref={elementRef}>
          <ReactLoading type={'spinningBubbles'} color={'#51dbe8'} height={'10%'} width={'10%'} />
        </ContainerLoader> 
        : null
        }
        </ContainerTable>
  )
};

export default CitiesComponent;