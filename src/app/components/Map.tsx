'use client'

import L from 'leaflet';
import { MapContainer, Marker, TileLayer, Circle } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useMemo, useRef, useState } from 'react';
import { CountrySelectValue } from './inputs/CountrySelect';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl; 
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[],
  value?: CountrySelectValue;
  callBack?: (value: CountrySelectValue) => void;
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const Map: React.FC<MapProps> = ({
    center,
    value,
    callBack
}) => {

    const markerRef = useRef(null);
    const circleRef = useRef(null);
    const mapRef = useRef(null);
  
    const [position, setPosition] = useState(center as L.LatLngExpression)

    const circleEventHandler = useMemo(
      () => ({
        mousedown()   {
          const circle = circleRef.current
          const map = mapRef.current
          map.on('mousemove', function (e) {
            circle.setLatLng(e.latlng);
          });
          
          
        },
        click: function () {
          const map = mapRef.current
          map.removeEventListener('mousemove');
        }
        
      }),
      [value, callBack],
    )

      const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
                if (value) {
                    value.latlng = marker.getLatLng() || [6.2442034, -75.5812115];
                    callBack(value);
                }
            }
          },
        }),
        [value, callBack],
      )

    return (
        <div>
            <MapContainer
                center={position as L.LatLngExpression || [6.2442034, -75.5812115]} 
                zoom={14} 
                scrollWheelZoom={false} 
                className="h-[35vh] rounded-lg"
                ref={mapRef}
                
            >
                <TileLayer
                    url={url}
                    attribution={attribution}
                    />
                    {center && (
                    <Marker 
                        position={position}
                        draggable={true}
                        eventHandlers={eventHandlers}
                        ref={markerRef}
                        
                    />
                    )}
                    <Circle  eventHandlers={circleEventHandler} ref={circleRef} center={[6.2442034, -75.5812115]} radius={500} />
            </MapContainer>
        </div> 
    )
    ;
}
 
export default Map;