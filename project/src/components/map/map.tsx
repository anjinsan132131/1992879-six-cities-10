import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import { Offer } from '../../types/offer-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constans';

type MapProps = {
  selectedOffer?: Offer;
  offers: Offer[];
};

const customIcon = (iconName: string) => new Icon({
  iconUrl: iconName,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({selectedOffer, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const layerGroupRef = useRef(new LayerGroup());
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    const layerGroup = layerGroupRef.current;
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(selectedOffer !== undefined && offer.id === selectedOffer.id
            ? customIcon(URL_MARKER_CURRENT)
            : customIcon(URL_MARKER_DEFAULT))
          .addTo(map);
      });
      map.addLayer(layerGroup);
    }
    return () => {
      layerGroup.clearLayers();
    };
  }, [map, offers, selectedOffer]);

  return (
    <section
      className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
