import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import LocationPin from './location.js';




  const Map = ({ location, zoomLevel }) => (
    <div className="map">
     
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAFF_z5Ubjn14ARBTaMeJo7oOJKU5qgtOY' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map;