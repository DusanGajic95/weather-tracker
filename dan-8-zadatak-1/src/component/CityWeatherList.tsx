import { FC } from "react";
import City from "./City";

interface listaGradova {
  ime: string;
  temperatura: number;
  vlaznotVazduha: number;
}
const cityLista: listaGradova[] = [
  { ime: "London", temperatura: 23, vlaznotVazduha: 32 },
  { ime: "Bec", temperatura: 32, vlaznotVazduha: 23 },
  { ime: "Novi Sad", temperatura: 3, vlaznotVazduha: 15 },
  { ime: "Krakovo", temperatura: 13, vlaznotVazduha: 45 },
  { ime: "Pariz", temperatura: 23, vlaznotVazduha: 3 },
];

const CityWeatherList: FC = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Ime</th>
          <th>Vreme</th>
          <th>Vlaznost vazduha</th>
        </tr>
        {cityLista.map((city, index) => (
          <City key={index} />
        ))}
      </table>
    </div>
  );
};
export default CityWeatherList;
