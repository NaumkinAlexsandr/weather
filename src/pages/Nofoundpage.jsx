import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";

function NofoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
        <meta name="content-type" content="text/html; charset=UTF-8"></meta>
        <meta name="description" content="This is my React Native app"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="keywords" content="Weather forecast, Прогноз погоди"></meta>
        <meta name="author" content="Naumkin Alexsander"></meta>
        <meta name="rating" content="general"></meta>
        <meta name="language" content="en"></meta>
        <meta name="language" content="ua"></meta>
      </Helmet>
      <div className="container">
        <h1>
          Page not found <Link to="/weather/">Go Home</Link>
        </h1>
      </div>
    </>
  );
}

export { NofoundPage };
