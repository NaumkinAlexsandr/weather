import { Link } from "react-router-dom";
import React from "react";
import Meta from "../components/ui/Helmet";

function NofoundPage() {
  return (
    <>
      <Meta title="Page not found" />
      <div className="container">
        <h1>
          Page not found <Link to="/weather/">Go Home</Link>
        </h1>
      </div>
    </>
  );
}

export { NofoundPage };
