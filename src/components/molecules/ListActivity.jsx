import React, { memo } from "react";
import { Heading, Icon } from "@/components/atoms";

const ListActivity = ({
  title,
  date,
  onClickCard = () => {},
  onClickDelete = () => {},
}) => {
  return (
    <li
      className="h-[150px] lg:h-[234px] py-[13px] px-[17px] md:py-[17px] md:px-[24px] lg:py-[22px] lg:px-[27px] rounded-[12px]"
      style={{
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        data-cy="activity-item"
        className="h-full flex flex-col justify-between"
      >
        <div className="h-full cursor-pointer" onClick={onClickCard}>
          <Heading type="3" dataCy="activity-item-title">
            {title}
          </Heading>
        </div>

        <div className="flex justify-between items-center">
          <p
            data-cy="activity-item-date"
            className="font-regular text-[#888888] text-[10px] md:text-[12px] lg:text-[14px]"
          >
            {date}
          </p>

          <div className="relative">
            <button onClick={onClickDelete}>
              <Icon
                dataCy="activity-item-delete-button"
                name="trash-grey"
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-full lg:h-full"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default memo(ListActivity);
