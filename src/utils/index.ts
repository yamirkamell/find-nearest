export const distanceCities = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // RADIO_TIERRA_EN_KILOMETROS

    // Convertir todas las coordenadas a radianes
    const newLat1 = lat1 * Math.PI/180; 
    const newLat2 = lat2 * Math.PI/180;
    const diffLat = (lat2-lat1) * Math.PI/180;
    const diffLon = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(diffLat/2) * Math.sin(diffLat/2) +
            Math.cos(newLat1) * Math.cos(newLat2) *
            Math.sin(diffLon/2) * Math.sin(diffLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
}