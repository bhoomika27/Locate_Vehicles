import React, { PureComponent } from 'react';
import data from './sampleData.json'
import MapContainer from './googleMaps';


class LocateVehicles extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {lang:'55.0273',
        lat:'24.9857',
        name:'' }
    }

    showLocation=(car)=>{
        if(car.location !== undefined)
        {
            this.setState({lang : car.location[0], lat : car.location[1], name:car.name })
        }         
    }
    
    render() { 
        return (
            <div className="mainContainer">
                <div className="sideBar">
                    <div className='searchBar'></div>
                    {Object.values(data[0].vehicles).map((car,index)=>{
                        var xfx = car.status === 'green' ? 'avail' : car.status === 'red' ? 'unavail' : car.status === 'yellow' ? 'readyTo' : 'noneStatus'; 
                        return (
                        <div key={car.vid} className="vehiclesDiv" onClick={this.showLocation.bind(this,car)}>


                            <span className={"dot "+ xfx} ></span>
                            <p className="vehicleName" key={car.vid}>{car.name}</p>
                            </div> )                   
                    })}

                </div>
                <div id="map" className="locationMap">
                    <MapContainer lang={this.state.lang} lat={this.state.lat} name={this.state.name}/>
                </div>
            </div>
          );
    }
}
 
export default LocateVehicles;