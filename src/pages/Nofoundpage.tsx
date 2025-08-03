import { Link } from "react-router-dom";
import React from "react";
import Meta from "../components/ui/Helmet";

function NofoundPage() {
  return (
    <>
      <Meta title="Page not found" />
      <div className="notFound">
        <h1>Page not found</h1>
        <Link className="link" to="/">
          Go Home
        </Link>
      </div>
    </>
  );
}

export { NofoundPage };
