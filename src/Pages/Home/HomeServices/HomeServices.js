import React, { useEffect, useState } from "react";
import Service from "../Services/Service/Service";

import "./HomeServices.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://radiant-shelf-17408.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="p-4 text-danger fw-bold">Our Trending Cars</h1>
      <div className="service-container mb-5">
        {services.slice(2, 8).map((sv) => (
          <Service key={sv.name} sv={sv}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
