import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import { Icon } from 'leaflet';
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

const defaultCity = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  name: 'Paris'
};

function Map({selectedOffer, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = (offers.length !== 0) ? offers[0]?.city : defaultCity;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (selectedOffer === offer) ? customIcon(URL_MARKER_CURRENT) : customIcon(URL_MARKER_DEFAULT),
          }).addTo(map);
      });
    }
    return () => {
      map?.eachLayer((it) => {
        if (it.getPane()?.classList.contains('leaflet-marker-pane')) {
          it.remove();
        }
      });
    };
  });

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
