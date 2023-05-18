
import './App.css';
import Search from './components/SerachBar';
import Data from './components/Data';
import { useEffect, useState } from 'react';
import ErrorBox from './components/ErrorBox';
import Popup from './components/Popup';
function App() {
  const check = !navigator.onLine;
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [fail, setFail] = useState(check);
  window.addEventListener('offline',()=>{
    setFail(true);
    setData("");
  })

  window.addEventListener('online',()=>{
    setFail(false);
    window.location.reload();
  })
  useEffect(() => {
    if(navigator.onLine){navigator.geolocation.getCurrentPosition((pos) => {
      let val = pos.coords.latitude + "%2C" + pos.coords.longitude;
      setCity(val);
    })}
  }, [])
  useEffect(() => {
    if (city) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e8f0a1b3ebmshb55f2ba42a54e92p111921jsn3e62259cb043',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw new Error();
        })
        .then(response => {
          setData(response);
        })
        .catch(() => {
          setFail(true);
        });
    }
  }, [city])
  return (
    <div className="App px-3">
      <div className='wrapper'>
        <div className='row justify-content-center'>
          <div className='col-11 col-md-9'>
            <Search setCity={setCity} setData={setData} setFail={setFail} />
          </div>
        </div>
        {data ? <Data data={data} city={city} /> : (
          fail ? <ErrorBox isOnLine={navigator.onLine} /> : <div className='row justify-content-center'>
            <span className='spinner spinner-border text-primary mt-5'></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
