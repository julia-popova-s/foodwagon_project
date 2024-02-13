/* eslint-disable max-len */
import { Map, ObjectManager, Placemark, Polygon, YMaps } from '@pbe/react-yandex-maps';
import cn from 'classnames';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

import './balloon.css';
import { deliveryZones } from './deliveryZones';

export const Maps = ({ coord, handleChangeAddress, handleChangeCoord, place, placemarks }) => {
  const [maps, setMaps] = useState(null);

  const [isActive, setIsActive] = useState(null);
  const [visibleBalloon, setVisibleBalloon] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  const mapRef = useRef(null);
  const placemarkRef = useRef(null);
  const polygonRef = useRef(null);

  const updateSearchValue = useCallback(
    debounce((coord) => {
      handleChangeCoord(coord);
    }, 500),
    [],
  );
  const getGeoLocation = (e) => {
    const coord = e.get('target').getCenter();
    updateSearchValue(coord);
  };

  const onLoad = (map) => {
    setMaps(map);
  };
  useEffect(() => {
    if (maps && coord?.length && placemarkRef.current && mapRef.current) {
      const deliveryZone = maps?.geoQuery(deliveryZones).addToMap(mapRef.current);
      deliveryZone.each(function (obj) {
        obj.options.set({
          fillColor: obj.properties.get('fill'),
          fillOpacity: obj.properties.get('fill-opacity'),
          strokeColor: obj.properties.get('stroke'),
          strokeOpacity: obj.properties.get('stroke-opacity'),
          strokeWidth: obj.properties.get('stroke-width'),
        });
        obj.properties.set('balloonContent', obj.properties.get('description'));
      });

      const targetZone = deliveryZone.searchContaining(placemarkRef.current).get(0);

      if (targetZone) {
        console.log('доставка есть');
      } else {
        console.log('нет');
      }
    }
  }, []);

  useEffect(() => {
    if (maps && coord?.length) {
      setIsLoaded(false);
      const resp = maps?.geocode(coord);
      resp
        .then((res) => {
          setIsLoaded(true);
          handleChangeAddress(res.geoObjects.get(0).getAddressLine());
        })
        .catch((error) => {
          console.error('The Promise is rejected!', error);
        });
    }
  }, [coord]);

  const handleActionBegin = () => {
    setIsActive(true);
  };

  const handleActionEnd = (e) => {
    setIsActive(false);
  };

  const handleVisibleBalloon = () => {
    setVisibleBalloon(true);
  };

  return (
    <YMaps
      query={{
        apikey: process.env.REACT_APP_YANDEX_API_KEY,
        coordorder: 'longlat',
        lang: 'en_RU',
      }}
    >
      <Map
        modules={[
          'geolocation',
          'geocode',
          'control.ZoomControl',
          'control.FullscreenControl',
          'geoObject.addon.balloon',
          'control.GeolocationControl',
          'geoQuery',
        ]}
        state={{
          behaviors: ['default'],
          center: coord,
          controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
          zoom: 9,
        }}
        className="map"
        instanceRef={mapRef}
        onActionBegin={handleActionBegin}
        onActionEnd={handleActionEnd}
        onBoundsChange={(ymaps) => getGeoLocation(ymaps)}
        onLoad={(ymaps) => onLoad(ymaps)}
      >
        <div className={cn('pointer', { active: isActive })} onClick={handleVisibleBalloon}>
          <ReactSVG
            className={cn('placemark', { active: isActive })}
            src={`${process.env.PUBLIC_URL}/images/find-food/search-panel/location.svg`}
            wrapper="span"
          />
          {!isLoaded && 'd'}
        </div>

        {/* {deliveryZones.features.map(({ geometry, id, properties }) => {
          // console.log(polygon);
          // if (polygon.geometry.coordinates.contains(coord)) {
          //   console.log(1);
          // }
          return (
            <Polygon
              options={{
                fillColor: '#ed4543',
                opacity: 0.2,
                strokeColor: '#b3b3b3',
                strokeOpacity: 0,
                strokeStyle: 'shortdash',
                strokeWidth: 0,
              }}
              geometry={geometry.coordinates}
              instanceRef={polygonRef}
              key={id}
            />
          );
        })} */}

        <Placemark geometry={coord} instanceRef={placemarkRef} options={{ iconOffset: [0, 0], visible: false }} />

        <ObjectManager
          objects={{
            openBalloonOnClick: true,
            preset: 'islands#redDotIcon',
          }}
          options={{
            clusterize: true,
            gridSize: 150,
          }}
          features={placemarks}
          modules={['objectManager.addon.objectsBalloon', 'objectManager.addon.objectsHint', 'objectManager.Balloon']}
        />
        <div className={cn('balloon', { visible: visibleBalloon })}>
          <div className="balloon__contact">Your location</div>
          <div className="balloon__address">{place}</div>
        </div>
      </Map>
    </YMaps>
  );
};
