import React, { useState } from 'react';
import SingleCity from './SingleCity';

interface CityWeather {
  name: string;
  temperature?: number;
  humidity?: number;
  category: string;
}

const CityWeatherList: React.FC = () => {
  const [cities, setCities] = useState<CityWeather[]>([
    { name: 'Beograd', temperature: 20, humidity: 60, category: 'Sunny' },
    { name: 'Novi Sad', temperature: 18, humidity: 55, category: 'Cloudy' },
    { name: 'Nis', temperature: 22, humidity: 70, category: 'Rainy' },
    { name: 'Subotica', temperature: 17, humidity: 50, category: 'Sunny' },
    { name: 'Kragujevac', temperature: 19, humidity: 65, category: 'Cloudy' },
  ]);
  const [searchText, setSearchText] = useState<string>('');

  const handleRemoveCity = (cityName: string) => {
    setCities(prevCities => prevCities.filter(city => city.name !== cityName));
  };

  const handleMoveToTop = (cityName: string) => {
    setCities(prevCities => {
      const cityIndex = prevCities.findIndex(city => city.name === cityName);
      if (cityIndex !== -1) {
        const cityToMove = prevCities[cityIndex];
        const filteredCities = prevCities.filter(city => city.name !== cityName);
        return [cityToMove, ...filteredCities];
      }
      return prevCities;
    });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      <h2>Weather in Cities</h2>
      <input type="text" placeholder="Search cities..." onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
            <th>Weather Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map(city => (
            <SingleCity key={city.name} city={city} onRemove={handleRemoveCity} onMoveToTop={handleMoveToTop} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityWeatherList;