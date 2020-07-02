import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 


const mapStyles = {
    width: '100%',
  };
export class MapContainer extends Component {

constructor(props){
    super(props);
     console.log(props);
    this.state={lang : props.lang,
         lat:props.lat,
         name:props.name,
         showingInfoWindow: false,  //Hides or the shows the infoWindow
         activeMarker: {},          //Shows the active marker upon click
         selectedPlace: {} 
        }
}

componentDidMount(){
    // console.log(props);
}

componentWillReceiveProps(nextProps){
    this.setState({lang : nextProps.lang, lat:nextProps.lat,name:nextProps.name})
}

onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
      
    return (
        <div style={mapStyles}>
    <Map google={this.props.google} zoom={10} initialCenter={{
        lat: this.state.lat, 
        lng: this.state.lang
      }}>
 
        <Marker onClick={this.onMarkerClick}
              name={'Kenyatta International Convention Centre'}
                position={{lat: this.state.lat, lng:this.state.lang}}
        />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>ddddd</h1>
            </div>
        </InfoWindow>
      </Map>
        </div>
  
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMkM9bAkC7QreZyNTmzfC431eS_aKZmNY')
})(MapContainer)