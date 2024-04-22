import React from 'react';
import { ContainerNearestCities, ContainerRoot, ListComponent, SubTitleComponent, TitleComponent } from './styled';

interface Props {
    selectedCity: any,
    nearestCities: any,
}
const NearestCitiesComponent = ({selectedCity, nearestCities}: Props) => {

  return (
    <ContainerRoot>
        <TitleComponent>Ciudades cercanas a {selectedCity.name}</TitleComponent>
        {nearestCities.map((item : any, index: number) => 
        <ContainerNearestCities key={index}>
            <ListComponent><SubTitleComponent>{item.name}</SubTitleComponent></ListComponent>
        </ContainerNearestCities> 
        )}
    </ContainerRoot>
  )
};

export default NearestCitiesComponent;