import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div className={`max-w-430 mx-auto px-2  ${className}`}>{children}</div>
  );
};
