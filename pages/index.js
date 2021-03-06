import React, { Component } from "react";
import Head from "next/head";
import GoogleMapReact from "google-map-react";
import { locations } from "../locations";
import MyGreatPlaceWithHover from "../components/my_great_place_with_hover";
import { K_SIZE } from "../components/my_great_place_with_hover_styles";

import { popup } from "../components/popup_styles";
import Popup from "../components/popup";

//import { GMAPS_API_KEY } from "../config";
const GMAPS_API_KEY = process.env.NEXT_PUBLIC_KEY;

const mapCenter = { lat: 36.58597, lng: 127.860003 };
const marker = ({ id }) => (
  <div key={id} style={markerStyle}>
    {id}
  </div>
);

const markers = (locations, handler) => {
  return locations.map((location) => (
    <MyGreatPlaceWithHover
      text={location.id}
      lat={location.lat}
      lng={location.lng}
    />
  ));
};

class SimpleHoverMap extends Component {
  static defaultProps = {
    center: mapCenter,
    zoom: 8,
  };

  render() {
    return (
      <div>
        <Head>
          <title>Only 4 walk</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GMAPS_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            hoverDistance={K_SIZE / 2}
            //draggable={false}
          >
            {markers(locations)}
          </GoogleMapReact>

          <style jsx global>{`
            body {
              margin: 0;
            }
          `}</style>
        </div>
      </div>
    );
  }
}

export default SimpleHoverMap;
