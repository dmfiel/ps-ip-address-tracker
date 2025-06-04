import {
  map as leafletMap,
  Map as LeafletMap,
  latLng,
  tileLayer,
  MapOptions,
  marker
} from 'leaflet';
let myMap: LeafletMap;

export function showMap(
  lat: number,
  lng: number,
  message: string | undefined = undefined
) {
  const options: MapOptions = {
    center: latLng(lat, lng),
    zoom: 12
  };

  if (!myMap) myMap = leafletMap('map', options);
  else myMap.setView([lat, lng], 12);

  tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    // `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
    {
      //style URL
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      crossOrigin: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  ).addTo(myMap);

  if (message) marker([lat, lng]).addTo(myMap).bindPopup(message).openPopup();
  else marker([lat, lng]).addTo(myMap);
}
