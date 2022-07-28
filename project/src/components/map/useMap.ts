import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import City from '../../types/offer-type';
import { URL_MAP_LAYER, MAP_LAYER_LINK } from '../../constans';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: 10
      });

      const layer = new TileLayer(
        URL_MAP_LAYER,
        {
          attribution:
          MAP_LAYER_LINK
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    map?.setView({lat: city.location.latitude, lng: city.location.longitude});
  }, [city, map]);

  return map;
}

export default useMap;
