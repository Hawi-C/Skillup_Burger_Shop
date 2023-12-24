import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';

const Shipping = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
    }
  }, [selectedCountry]);

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          {/* Other form fields... */}
          
          <div>
            <label>Country</label>
            <select onChange={(e) => setSelectedCountry(e.target.value)}>
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>State</label>
            <select>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* Other form fields... */}
          
          <Popup 
            trigger={<button type="button">Confirm Order</button>} 
            position="right center">
            <div style={{color: "red", position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
