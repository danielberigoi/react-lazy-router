import React from "react";
import { Route as RRoute } from "react-router-dom";

export const Route = ({ fallback = null, ...routeProps }) => (
  <React.Suspense fallback={fallback}>
    <RRoute {...routeProps} />
  </React.Suspense>
);

export * from "react-router-dom";
