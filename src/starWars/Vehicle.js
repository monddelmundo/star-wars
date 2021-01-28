import React, { useState, useEffect } from "react";

function Vehicle(props) {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    const id = props.match.params.vehicleId;
    const savedVehicle = localStorage.getItem(`vehicle-${id}`)
    if (savedVehicle) {
        setVehicle(JSON.parse(savedVehicle))
        return;
    }
    fetch(`https://swapi.dev/api/vehicles/${id}`)
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem(`vehicle-${id}`, JSON.stringify(json))
        setVehicle(json);
      });
  }, [props.match.params.vehicleId]);

  return (
    <>
      <h3>Name: {vehicle.name}</h3>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>URL: {vehicle.url}</p>
    </>
  );
}

export default Vehicle;
