import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      Homepage
      <Link to="/pricing">pricing</Link>
    </div>
  );
}

export default Homepage;
