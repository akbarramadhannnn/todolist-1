import React, { Fragment } from "react";
import Header from "./Header";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Header />

      <div className="px-[20px] md:px-[90px] lg:px-[220px] mb-[50px]">{children}</div>
    </Fragment>
  );
};

export default Index;
