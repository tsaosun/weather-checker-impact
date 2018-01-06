import React from 'react';


const WeatherData = function(props) {
  console.log('in weatherdata')
  return (
    <div id="resultDiv">
      <p>{() => props.weather()}</p>
    </div>
  )
}

/*function renderDataFunction(props){
  if(props.weather.apiData.response.error){
    return "Data not found"
  }
  else{
    return props.weather.apiData.response
  }
}*/

export default WeatherData;
