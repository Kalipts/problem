import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
const Home = () => {
  const hitory = useHistory();
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <h1>History</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Home;
