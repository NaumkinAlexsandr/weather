import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { IHelmetProps } from "../../types/interfaces";

const Meta: FC<IHelmetProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
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
  );
};
export default Meta;
