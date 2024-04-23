import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/_layout/layout';
import InputComponent from './components/inputComponent';
import Cities from '../../mocks/api-cities/GET.json';
import CitiesComponent from './components/citiesComponent';
import { ContainerHeader, ContainerRoot, TitleComponent } from './styled';
import { distanceCities } from '../../utils';
import NearestCitiesComponent from './components/nearestCitiesComponent';
import { InitialCitiesType } from './types';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [initialCities, setInitialCities] = useState<InitialCitiesType[]>([]);
  const [selectedCity, setSelectedCity] = useState<InitialCitiesType | undefined>(undefined);
  const [nearestCities, setNearestCities] = useState<InitialCitiesType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [offSet, setOffset] = useState(0);
  const limit = 10;
  const elementRef = useRef(null);

  useEffect(()=> {
    const observer = new IntersectionObserver(OnIntersection);
    if(observer && elementRef.current) observer.observe(elementRef.current);
    return () =>{
      if(observer) observer.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[initialCities])

  const OnIntersection = (entries: any) => {
    const firstEntry = entries[0];
    if(firstEntry.isIntersecting && hasMore) getData();
  };

  const getData = () => {
      const init = offSet * limit;
      const final = init + limit;
      if(offSet >= Cities.length) setHasMore(false);
      else{
        setTimeout(()=>{
          setInitialCities((initialCities: InitialCitiesType[]) => [...initialCities, ...Cities.slice(init, final)]);
          setOffset((offSet) => offSet + limit);
        }, 1000);
      }
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    if(e.target.value.length === 0) {
       setInitialCities([]);
       setOffset(0);
    }
    setTimeout(()=> {
      if(e.target.value.length >= 2) return filterItem(e.target.value);
    }, 1000);
  };

  const filterItem = (itemSearch: string) => {
    const resultSearch = Cities.filter(item => 
    (item.name.toString().toLowerCase().includes(itemSearch.toLowerCase())))
    .map(item => { return item }); 
    setInitialCities(resultSearch);
  };

  const handleSelectCity = (city: InitialCitiesType) => {
    setSelectedCity(city);
    let array: any = [];
    Cities.forEach((item, index) => {
      const distance = distanceCities(parseInt(city.lat), parseInt(city.lng), parseInt(item.lat), parseInt(item.lng));
        if(index < 3){
          array.push({...item, distance: distance});
        }
        else{
          if(array[0].distance > array[1].distance){
            if(array[0].distance > array[2].distance){
              if(array[0].distance > distance){
                array[0] = {...item, distance: distance};
              }
            } 
            else{
              if(array[2].distance > distance){
                array[2] = {...item, distance: distance};
              }
            }
          }
          else{
            if(array[1].distance > array[2].distance){
              if(array[1].distance > distance){
                array[1] = {...item, distance: distance};
              }
              else{
                if(array[2].distance > distance){
                  array[2] = {...item, distance: distance};
                }
              }
            } 
        }
      }
    })
    setNearestCities(array);
    return array;
  }

  return (
    <Layout>
      <ContainerRoot>
        <ContainerHeader>
          <TitleComponent> Find Nearest </TitleComponent>
          <InputComponent ariaLabel={'Input'} placeholder={'Buscar ciudad'} type='text' value={searchValue} handleChange={handleChange} />
        </ContainerHeader>
        <CitiesComponent 
          initialCities={initialCities}
          hasMore={hasMore}
          searchValue={searchValue}
          elementRef={elementRef}
          handleSelectCity={handleSelectCity}
        />
        {selectedCity !== undefined ?
          <NearestCitiesComponent 
            selectedCity={selectedCity}
            nearestCities={nearestCities}
          />
        : null}
      </ContainerRoot>
    </Layout>
  )
};

export default Home;