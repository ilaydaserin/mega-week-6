import { useState } from 'react'
import './App.css'
function App() {
  const [celsius, setCelsius] = useState('');
  const [result, setResult] = useState('');

  const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
  };

const handleClick =(event)=>{
  if(celsius!==''){
    if(event.target.id=='kelvin'){
      const kelvinValue = convertToKelvin(celsius);
      setResult(`${kelvinValue}K`);
    }
    else if(event.target.id=='fahrenheit'){
      const fahrenheitValue = convertToFahrenheit(celsius);
      setResult(`${fahrenheitValue}F`);
    }
  }
}
  const convertToKelvin = (celsius) => parseFloat(celsius) + 273.15;
  const convertToFahrenheit = (celsius) => (parseFloat(celsius) * 9 / 5) + 32;

  return (
    <div className="body">
    <div className='container'>
      <div className='header'><h2>Temprature Converter</h2></div>
      <div className='content'></div>
      <label className='label'>
        Celsius:
        <input id='input'  type="number" value={celsius} onChange={handleCelsiusChange} />
        <div className='result-container'>
          <p className='label'>Result:</p>
          <div className='result'>{result}</div>
        </div>
      </label>
      <div className='button-group'><button className='button' onClick={handleClick} id='kelvin'>Convert to Kelvin</button><br />
      <button className='button' onClick={handleClick} id='fahrenheit'>Convert to Fahrenheit</button></div>
      
    </div>
    </div>
  );
};


export default App
