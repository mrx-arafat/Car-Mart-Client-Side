import React, { useEffect, useState } from "react";

import Service from "./Service/Service";

import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="p-4 text-danger fw-bold">Our Available Cars</h1>
      <div className="service-container mb-5">
        {services.map((sv) => (
          <Service key={sv.name} sv={sv}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
