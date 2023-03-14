import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const createAdress = `${address.address}, ${address.city}, ${address.state} ${address.cp}, ${address.country}`;

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${createAdress}&key=AIzaSyDmWrytnz9jScVJeXffWdSGhqUHVKSC0TQ`;

  useEffect(() => {
    axios.get(API).then(function (response) {
      setMap(response.data.results[0].geometry.location);
    });
  }, []);

  return map;
};

export default useGoogleAddress;
