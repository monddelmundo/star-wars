import React, { useState, useEffect } from "react";
import {
  NavLink,
} from "react-router-dom";

function Nav() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const savedVehicles = localStorage.getItem('savedVehicles')

    if(savedVehicles) {
      setVehicles(JSON.parse(savedVehicles))
      return;
    }

    fetch(`https://swapi.dev/api/vehicles/`)
      .then((res) => res.json())
      .then((json) => {
        setVehicles(json.results)
        localStorage.setItem('savedVehicles', JSON.stringify(json.results))
      });
  }, []);

  return (
    <ul>
      {vehicles.map((vehicle, index) => {
        const id = vehicle.url.split("/")[5];

        return (
          <li key={index}>
            <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/vehicle/${id}`}>{vehicle.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Nav;
