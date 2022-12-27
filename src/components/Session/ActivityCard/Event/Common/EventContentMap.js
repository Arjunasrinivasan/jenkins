import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  render() {
    const { latitude, longitude } = this.props.data;

    return (
      <div id={this.props.target} className="collapse">
        <div className="list-group list-group-flush bg-light border-top">
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{
              lat: latitude,
              lng: longitude,
            }}
          >
            <Marker />
          </Map>
        </div>
      </div>
    );
  }
}

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY || process.env.react_app_google_api_key || '';
export default GoogleApiWrapper({
  apiKey,
})(MapContainer);
