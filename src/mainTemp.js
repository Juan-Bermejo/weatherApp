import React, { Component } from 'react';
import './styles/mainTemp.css';

import arg from './static/argentina.png';
import usa from './static/united-states.png';

class App extends Component {


    constructor(){
        super();
        
        this.dates = {
            meses: ['Ene', 'Feb', 'Mar ', 'Abr', 'Mayo', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Octd', 'Nov', 'Dec'] 
        }

        this.state = {
            location: {
                name: "",
                country: "",
                localtime: ""
            },
            current_temp: {
                temp_c: 0,
                temp_f: 0,
                condition: {
                    text: "",
                    icon: "",
                    code: 0
                }
            }
        }
        this.getWeatherData = this.getWeatherData.bind(this);
    }

    componentDidMount(){
        this.getWeatherData();
        this.clockFunction();
    }

    getWeatherData(){

        const api_key_weather = '3dc144e9073e450695a194309211703';
        const location = 'Argentina';
        const api_url_weather = 'https://api.weatherapi.com/v1/forecast.json?key=' + api_key_weather + '&q=' + location + '&days=3&aqi=no&alerts=no&lang=es';

        fetch(api_url_weather, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }  
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                location: data.location,
                current_temp: data.current,
                condition: data.current.condition
            });
        })
        .catch(err => console.error(err));
    }

    getTutiempoData(){
        const api_key_tutiempo = 'zxT4zzqzz4aeAZF';
        const api_url_tutiempo = 'https://api.tutiempo.net/json/?lan=es&apid=' + api_key_tutiempo + '&lid=';

        const url_icon = "https://v5i.tutiempo.net/wi/01/{tamaño}/{icono}.png"

        fetch(api_url_tutiempo, {

        })
    }

    clockFunction() {
        var actualDate = new Date();
        var hour = actualDate.getHours();
        var minutes = actualDate.getMinutes();
        var seconds = actualDate.getSeconds();

        

        console.log(actualDate);

        

        setTimeout(this.clockFunction, 1000);
    }

 
    changeValue(){

        console.log("this works");
    }


    render(){
        return (
            <div className="general">

                <section className="first-section">

                    <div className="title">

                        <h3>C/F</h3>

                    </div>

                    <div className="language">

                        <img src={arg}/>

                        <img src={usa}/>
                        
                    </div>

                </section>

                <div className="actual-temp">

                    <div className="location">
                        
                        <h3>{this.state.location.country},  {this.state.location.name}</h3>
                        
                    </div>

                    <div className="time">
                        
                    </div>

                    <div className="temperature">

                        <img src="https://v5i.tutiempo.net/wi/04/90/2n.png"/>
                    
                        <h1 onClick={this.changeValue}>{this.state.current_temp.temp_c}°</h1>

                    </div> 

                    <div className="condition">

                        <h3>{this.state.current_temp.condition.text}</h3>

                    </div>

                    <div className="date">

                        <h4>{this.state.location.localtime.slice(8,11)}</h4>

                        <h4>{this.dates.meses[this.state.location.localtime.slice(5,7) - 1]}</h4>
                    
                        <h4>{this.state.location.localtime.slice(0,4)}</h4>
                        
                    </div>


                </div>

                    <h3>{this.state.current_temp.temp_f}</h3>
                    <h3>{this.state.current_temp.condition.code}</h3>     

                <div>
                    <img src={this.state.current_temp.condition.icon}/>

                </div>
            </div>

        )
    }
}


export default App;