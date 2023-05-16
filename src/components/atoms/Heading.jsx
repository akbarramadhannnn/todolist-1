import React, { memo, useMemo } from "react";

const Heading = ({ type = "1", children, dataCy, onClick = () => {} }) => {
  if (type === "1") {
    return (
      <h1
        onClick={onClick}
        data-cy={dataCy}
        className="font-bold text-[18px] md:text-[22px] lg:text-[24px] text-white"
      >
        {children}
      </h1>
    );
  } else if (type === "2") {
    return (
      <h2
        onClick={onClick}
        data-cy={dataCy}
        className="font-bold text-[20px] md:text-[28px] lg:text-[36px] text-black1"
      >
        {children}
      </h2>
    );
  } else if (type === "3") {
    return (
      <h3
        onClick={onClick}
        data-cy={dataCy}
        className="font-bold text-[14px] lg:text-[16px] lg:text-[18px] text-black1"
      >
        {children}
      </h3>
    );
  }
  return content;
};

export default memo(Heading);
