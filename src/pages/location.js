import React, { Component, useState } from "react";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';


class MapContainer extends Component{
    constructor(){
        super()
        this.state={
                   lat:'',
                   long:'',
        }
    }
    componentDidMount(){
        this.getlocation();
    }
    getlocation(){
        let context = this;
        navigator.geolocation.getCurrentPosition(function(position){
         console.log(position.coords.latitude); 
         console.log(position.coords.longitude);
         context.setState({lat:position.coords.latitude});
         context.setState({long:position.coords.longitude});
        })  
    }

    
    render() {
        return (
            
            <Map
              google={this.props.google}
              zoom={10}
              center={{lat:this.state.lat, lng:this.state.long}}
              defaultCenter={{lat:this.state.lat, lng:this.state.long}}
            //   style={mapStyles}
            initialCenter={{ lat:this.state.lat, lng:this.state.long}}>
              <Marker position={{ lat:this.state.lat, lng:this.state.long}} />
            </Map>
        );
      }
    }
      export default GoogleApiWrapper({
        apiKey: 'AIzaSyBpYRqWmTWS4Pifr7ZybMm80dToYMD4xyQ'
      })(MapContainer);

     