export interface CitiesType {
    initialCities: InitialCitiesType[],
    hasMore: boolean,
    searchValue: string,
    elementRef?: React.MutableRefObject<null>,
    handleSelectCity: (item: InitialCitiesType) => void
}

export interface InitialCitiesType {
    country: string,
    name: string,
    lat: string,
    lng: string,
    distance?: number
}