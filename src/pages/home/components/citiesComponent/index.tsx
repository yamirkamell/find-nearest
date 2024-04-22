import React from 'react';
import { ContainerTable, ContainerTitles, DividerComponent, TextComponent } from './styled';
import ReactLoading from 'react-loading';

interface Props {
    initialCities: any,
    hasMore: boolean,
    searchValue: string,
    elementRef: any
  }
const CitiesComponent = ({initialCities, hasMore, searchValue, elementRef} : Props) => {

  return (
      <ContainerTable>
          <ContainerTitles id='titles'>
            <TextComponent> Nombre </TextComponent>
            <TextComponent id='center'> Country </TextComponent>            
          </ContainerTitles>
          <DividerComponent />
          {initialCities?.map((item: any, index: number) => (
            <div key={index}>
            <ContainerTitles id='data' onClick={()=>{}}>
                <TextComponent> {item.name} </TextComponent>
                <TextComponent id='center'> {item.country} </TextComponent>
            </ContainerTitles>
            <DividerComponent />
            </div>
          ))}
        {!hasMore || searchValue === '' ? 
        <div ref={elementRef} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ReactLoading type={'spinningBubbles'} color={'#51dbe8'} height={'10%'} width={'10%'} />
        </div> 
        : null
        }
        </ContainerTable>
  )
};

export default CitiesComponent;