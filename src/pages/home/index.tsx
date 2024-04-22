import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/_layout/layout';
import InputComponent from './components/inputComponent';
import Cities from '../../mocks/api-cities/GET.json';
import CitiesComponent from './components/citiesComponent';
import { ContainerHeader, ContainerRoot } from './styled';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [initialCities, setInitialCities] = useState<any>([]);
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
          setInitialCities((initialCities: any) => [...initialCities, ...Cities.slice(init, final)]);
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

  const filterItem = (itemSearch: any) => {
    const resultSearch = Cities.filter(item => 
    (item.name.toString().toLowerCase().includes(itemSearch.toLowerCase())))
    .map(item => { return item }); 
    setInitialCities(resultSearch.sort());
  };

  return (
    <Layout>
      <ContainerRoot>
        <ContainerHeader>
          <h2> Find Nearest </h2>
          <InputComponent placeholder={'inserte...'} type='text' name={searchValue} setName={handleChange} />
        </ContainerHeader>
        <CitiesComponent 
          initialCities={initialCities}
          hasMore={hasMore}
          searchValue={searchValue}
          elementRef={elementRef}
        />
      </ContainerRoot>
    </Layout>
  )
};

export default Home;