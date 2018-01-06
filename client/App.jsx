import React from 'react';
import ZipForm from './ZipForm.jsx';
import WeatherData from './WeatherData.jsx';

class App extends React.Component {

  constructor(){
    super()
    this.key = 'b4c6910fa2a7ae9c';
    this.state = {
      submitted: false,
      zipcode: 0,
      apiData: null
    }
    //toggleTaco's this should always be bound to this instance
    this.updateZipcode = this.updateZipcode.bind(this)
    this.renderAPI = this.renderAPI.bind(this)
  }

  updateZipcode(zipcode){
    console.log(zipcode)
    this.setState({
      submitted: !this.state.submitted,
      zipcode: zipcode

    })
    fetch('http://api.wunderground.com/api/'+ this.key + '/conditions/q/'+ zipcode +'.json').
    then(r => r.json()).
    then(r => this.updataData(r))
  }

  updataData(data){
    console.log(data)
    this.setState({
      apiData: data
    })
  }

  renderAPI(){
    console.log('in renderAPI')
    if(this.apiData.response.error){
      console.log("error from api")
      return "Data not found"
    }
    else{
      console.log('no error from api')
      return this.apiData.response
  }
}

  render(){
    return (
      <div className="container">
        <h1>Whats the weather?</h1>
        <ZipForm zip={this.updateZipcode}/>
        <WeatherData weather={this.renderAPI}/>
      </div>
    )
  }
}

export default App;
