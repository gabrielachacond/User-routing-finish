import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to="/users">
      <h1>Ver usuarios</h1>
    </Link>
  );
};

export default Home;
