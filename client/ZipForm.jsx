import React from 'react';

const ZipForm = function(props) {
  return (
    <div id="zip-form">
      <input id = "zipID" placeholder='Enter your Zip Code' />
      <button onClick={(event) => {event.preventDefault(); props.zip(document.getElementById('zipID').value);}}>Go</button>
    </div>
  )
}

export default ZipForm;
