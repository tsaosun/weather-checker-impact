import React from 'react';
import ZipForm from './ZipForm.jsx';

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
      dataUpdate: data
    })
  }

  render(){
    return (
      <div className="container">
        <h1>Whats the weather?</h1>
        <ZipForm zip={this.updateZipcode}/>
      </div>
    )
  }
}

export default App;
