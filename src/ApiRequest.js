import React, { Component } from 'react';
import './styles/mainTemp.css';


class ApiData extends Component {


    constructor(){
        super();
        
        this.dates = {
            meses: ['Ene', 'Feb', 'Mar ', 'Abr', 'Mayo', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Octd', 'Nov', 'Dec'] 
        }

        this.state = {
            coord: {
                lat: 0,
                lon: 0,
            },
            weather: [{
                id: 0,
                main: '',
                description: '',
                icon: ''
            }],
            main: {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                pressure: 0,
                humidity: 0.
            },
            dt: 0,
            name : ''
            
        }
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
    }

    componentDidMount(){
        this.getCoordinates();
        
        this.getWeatherData(this.lat, this.lon);
        //this.clockFunction();
    }

    getCoordinates(){

        navigator.permissions.query({name: 'geolocation'})
        .then( permission => {
            console.log(permission);
            if(permission.state === "promp"){
                console.log("okey");
            }
        })

        navigator.geolocation.getCurrentPosition(position => {

            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
        })

    }

    getWeatherData(lat, lon){

        const api_key = '38aeaa19f6b428caf2e85a691a6a12e3';
        const api_url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + api_key + '&callback=test&lang=es&units=metric';

        fetch(api_url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json'
            }  
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                coord: data.coord,
                weather: data.weather,
                main: data.main,
                dt: data.dt,
                name: data.name
            });
        })
        .catch(err => console.error(err));
    }

    render(){

        return (
            <div className="general">

                {/*<h3>{this.state.coord.lat}</h3>
                <h3>{this.state.coord.lon}</h3>
                <h3>{this.main.temp}</h3>
                <h3>{this.main.feels_like}</h3>
                <h3>{this.main.temp_max}</h3>
                <h3>{this.main.temp_min}</h3>
        */}
            </div>

        )
    }
}


export default ApiData;