import React from 'react';
import { ContainerNearestCities, ContainerRoot, ListComponent, SubTitleComponent, TitleComponent } from './styled';
import { InitialCitiesType } from '../../types';

interface Props {
    selectedCity: InitialCitiesType,
    nearestCities: InitialCitiesType[],
}
const NearestCitiesComponent = ({selectedCity, nearestCities}: Props) => {

  return (
    <ContainerRoot>
        <TitleComponent>Ciudades cercanas a {selectedCity.name}</TitleComponent>
        {nearestCities.map((item : InitialCitiesType, index: number) => 
        <ContainerNearestCities key={index}>
            <ListComponent><SubTitleComponent>{item.name}</SubTitleComponent></ListComponent>
        </ContainerNearestCities> 
        )}
    </ContainerRoot>
  )
};

export default NearestCitiesComponent;