import { Link } from "react-router-dom";
// import { HeaderEmpty } from "../core/headerEmpty/HeaderEmpty";
// import { HeaderLine } from "../core/headerLine/HeaderLine";

function NofoundPage() {
  return (
    <div>
      <div className="container">
        <h1>
          Page not found <Link to="/summary/">Go Home</Link>
        </h1>
      </div>
    </div>
  );
}

export { NofoundPage };
