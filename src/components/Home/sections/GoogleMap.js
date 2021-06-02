import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMap = (props) => {
  
 const containerStyle = {
      position: 'relative',  
      width: '100%',
      height: '60vh',
      border: 'none'
    }

    return (
      <section className='googleMaps'>
        <Map 
          containerStyle={containerStyle}  
          google={props.google}
          initialCenter={{
            lat: 42.915165,
            lng: -74.590792
          }}
          zoom={19}
        >
          <Marker 
            position={{
              lat: 42.915089,
              lng: -74.590880
            }} />
        </Map>
      </section>
    )
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA9gOtwLdx0wpfVxIDY-tqLoC4tOr8U9og')
})(GoogleMap)