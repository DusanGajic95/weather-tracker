import React from 'react';

interface CityProps {
  city: {
    name: string;
    temperature?: number;
    humidity?: number;
    category: string;
  };
  onRemove: (cityName: string) => void;
  onMoveToTop: (cityName: string) => void;
}

const SingleCity: React.FC<CityProps> = ({ city, onRemove, onMoveToTop }) => {
  return (
    <tr>
      <td>{city.name}</td>
      <td>{city.temperature || 'Nepoznat'}</td>
      <td>{city.humidity || 'Nepoznat'}</td>
      <td>{city.category}</td>
      <td>
        <button onClick={() => onRemove(city.name)}>Remove</button>
        <button onClick={() => onMoveToTop(city.name)}>Move to top</button>
      </td>
    </tr>
  );
};

export default SingleCity;