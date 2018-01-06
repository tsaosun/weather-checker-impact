import React from 'react';
import ZipForm from './ZipForm.jsx';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      submitted: false,
      zipcode: 0
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
    console.log(this.state.zipcode)
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
