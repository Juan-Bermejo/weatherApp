import React, { Component } from 'react';


class App extends Component {
    
    render () {

        const getData = this.props.data;

        console.log(getData);

        return (
            <div>
                <h1>yo digo: {this.getData}</h1>
            </div>,

            {/*
                <section className="first-section">

                            {/*    <div className="title">

                                    <h3>C/F</h3>

                                </div>

                                <div className="language">

                                    <img src={arg}/>

                                    <img src={usa}/>
                                    
                                </div>

                            </section>

                            <div className="actual-temp">

                                <div className="location">

                                    <button>

                                        <h3>{this.state.location.name},  {this.state.location.country}</h3>

                                    </button>

                                </div>

                                <div className="time">
                                    
                                </div>

                                <div className="temperature">

                                    <img src="https://v5i.tutiempo.net/wi/04/90/2n.png"/>
                                
                                    <h1 onClick={this.changeValue}>{this.state.current_temp.temp_c}°</h1>

                                </div> 

                                <App name="hola forro"/>

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
                
            */}


        );
    }
}


export default App;















































