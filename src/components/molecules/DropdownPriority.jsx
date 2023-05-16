import React, {
  memo,
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { Icon, Label } from "@/components/atoms";
import DataPriority from "@/data/priority";

const Lists = memo(({ onSelectList, color, label, value, valueList }) => {
  return (
    <li
      className={`bg-[#fff] border-b-[1px] border-l-[1px] border-r-[1px] border-[#E5E5E5] py-[19px] px-[17px] flex items-center justify-between cursor-pointer`}
      onClick={onSelectList}
      data-cy="modal-add-priority-item"
    >
      <div className="flex items-center">
        <div
          className={`w-[14px] h-[14px] rounded-full mr-[9px]`}
          style={{
            backgroundColor: color,
          }}
        />
        <Label>{label}</Label>
      </div>

      {value === valueList ? (
        <Icon name="check-grey" className="w-[20px] h-[20px]" />
      ) : null}
    </li>
  );
});

const Select = ({ label, value, onSelect = () => {} }) => {
  const ref = useRef(null);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleShowDropdown = useCallback(() => {
    setIsShowDropdown(!isShowDropdown);
  }, [isShowDropdown]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleSelectList = useCallback(
    (d) => {
      onSelect(d.value);
      handleShowDropdown();
    },
    [onSelect, handleShowDropdown]
  );

  const values = useMemo(() => {
    const findData = DataPriority.find((d) => d.value === value);
    return findData;
  }, [value]);

  return (
    <div data-cy="dropdownd-priority" className="relative" ref={ref}>
      <button
        data-cy="modal-add-priority-dropdown"
        className={`flex items-center justify-between w-full h-full h-3xl py-[14px] px-[17px] border border-[#E5E5E5] ${
          isShowDropdown
            ? "bg-[#F4F4F4] rounded-tl-[6px] rounded-tr-[6px]"
            : "rounded-[6px] bg-[#fff]"
        }`}
        onClick={handleShowDropdown}
      >
        {values ? (
          <div className="flex items-center">
            <div
              data-cy="modal-add-priority-item"
              className={`w-[14px] h-[14px] rounded-full mr-[9px]`}
              style={{
                backgroundColor: values.color,
              }}
            />

            <Label>{values.label}</Label>
          </div>
        ) : (
          <Label>{label}</Label>
        )}

        <Icon
          name={`chevron-${isShowDropdown ? "up" : "down"}-black`}
          className="h-3"
        />
      </button>

      {isShowDropdown ? (
        <ul className="w-full absolute left-0 h-[200px] overflow-y-auto rounded-bl-[6px] rounded-br-[6px]">
          {DataPriority.map((d, i) => {
            return (
              <Lists
                key={i}
                onSelectList={() => handleSelectList(d)}
                color={d.color}
                label={d.label}
                value={value}
                valueList={d.value}
              />
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default memo(Select);
