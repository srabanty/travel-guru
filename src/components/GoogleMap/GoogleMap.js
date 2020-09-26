import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDUPo4GDa40Erra30jn9mg51nAOma5Doec" }}
          defaultCenter={{lat:21.4394636,lng:92.00773159999994}}
          defaultZoom={15}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMap;