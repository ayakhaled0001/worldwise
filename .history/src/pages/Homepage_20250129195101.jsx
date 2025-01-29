import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      Homepage
      <Link to="/about">About</Link>
    </div>
  );
}

export default Homepage;
