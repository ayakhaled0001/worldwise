import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/pricing">pricing</Link>
    </div>
  );
}

export default Homepage;
