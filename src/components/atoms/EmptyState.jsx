import React, { memo, useMemo } from "react";
import EmptyState1 from "@/assets/images/empty-state-1.png";
import EmptyState2 from "@/assets/images/empty-state-2.png";

const EmptyState = ({ type = 1, dataCy, onClick }) => {
  const generateImage = useMemo(() => {
    let img;
    if (type === 1) {
      img = EmptyState1;
    } else {
      img = EmptyState2;
    }

    return img;
  }, [type]);

  return (
    <div
      data-cy={dataCy}
      className="flex justify-center items-center h-[300px] md:h-[700px] lg:h-full"
      onClick={onClick}
    >
      <img src={generateImage} alt="empty-state" />
    </div>
  );
};

export default memo(EmptyState);
