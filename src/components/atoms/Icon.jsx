import { memo, useMemo } from "react";

const Icon = ({ name, className = "w-full h-full", dataCy }) => {
  return useMemo(() => {
    if (name === "chevron-left-black") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66675 12L11.6667 20"
            stroke="#111111"
            strokeWidth="5"
            strokeLinecap="square"
          />
          <path
            d="M3.66675 12L11.6667 4"
            stroke="#111111"
            strokeWidth="5"
            strokeLinecap="square"
          />
        </svg>
      );
    } else if (name === "pencil-grey") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 16.9998H5L15.5 6.49981C16.0304 5.96938 16.3284 5.24996 16.3284 4.49981C16.3284 3.74967 16.0304 3.03025 15.5 2.49981C14.9696 1.96938 14.2501 1.67139 13.5 1.67139C12.7499 1.67139 12.0304 1.96938 11.5 2.49981L1 12.9998V16.9998Z"
            stroke="#A4A4A4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 3.49982L14.5 7.49982"
            stroke="#A4A4A4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "plus-white") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.999878V14.9999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M1 8H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "trash-grey") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5H17"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 9V15"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 9V15"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5"
            stroke="#888888"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "arows-sort-grey") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6L6 2M6 2L10 6M6 2V16"
            stroke="#888888"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M20 12L16 16M16 16L12 12M16 16V2"
            stroke="#888888"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      );
    } else if (name === "check-grey") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 5L4.5 8.75L12 1.25"
            stroke="#4A4A4A"
            strokeLinecap="square"
          />
        </svg>
      );
    } else if (name === "check-white") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9165 4.99995L4.83317 7.91662L10.6665 2.08328"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      );
    } else if (name === "chevron-down-black") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#111111" strokeLinecap="square" />
        </svg>
      );
    } else if (name === "chevron-up-black") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 7L7 1L13 7" stroke="#111111" strokeLinecap="square" />
        </svg>
      );
    } else if (name === "danger-red") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="68"
          height="61"
          viewBox="0 0 68 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 44.5V44.535M34 23.5V30.5V23.5Z"
            stroke="#ED4C5C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.50018 58.5012H58.5002C59.6423 58.4932 60.765 58.2059 61.7705 57.6643C62.7761 57.1227 63.6338 56.3433 64.2689 55.3941C64.904 54.4449 65.2972 53.3546 65.4142 52.2186C65.5312 51.0825 65.3685 49.935 64.9402 48.8762L40.0902 6.00125C39.4848 4.90714 38.5975 3.99515 37.5203 3.3601C36.4432 2.72504 35.2156 2.39011 33.9652 2.39011C32.7148 2.39011 31.4872 2.72504 30.41 3.3601C29.3329 3.99515 28.4455 4.90714 27.8402 6.00125L2.99018 48.8762C2.56997 49.9108 2.40334 51.0308 2.5042 52.1428C2.60506 53.2549 2.97048 54.3266 3.56996 55.2687C4.16943 56.2107 4.98556 56.9956 5.95022 57.558C6.91487 58.1203 8.00006 58.4438 9.11518 58.5012"
            stroke="#ED4C5C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "chevron-left-white") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.375 7.5L7.625 12.75"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M2.375 7.5L7.625 2.25"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      );
    } else if (name === "information-green") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
            stroke="#00A790"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 6V10"
            stroke="#00A790"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14H10.01"
            stroke="#00A790"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "close-grey") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L1 13"
            stroke="#A4A4A4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1L13 13"
            stroke="#A4A4A4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "sort-latest") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.5H7.75"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 5H6.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 9.5H6.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 7.25L11.5 9.5L13.75 7.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 0.5V9.5"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "sort-oldest") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.5H6.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 5H6.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 9.5H7.75"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 2.75L11.5 0.5L13.75 2.75"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 0.5V9.5"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "sort-az") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="13"
          height="16"
          viewBox="0 0 13 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25 6.5V2.75C9.25 1.715 9.715 1.25 10.75 1.25C11.785 1.25 12.25 1.715 12.25 2.75V6.5M12.25 4.25H9.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.25 14.75H9.25L12.25 9.5H9.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 10.25L3.25 12.5L5.5 10.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.25 3.5V12.5"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "sort-za") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="13"
          height="16"
          viewBox="0 0 13 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25 14.75V11C9.25 9.965 9.715 9.5 10.75 9.5C11.785 9.5 12.25 9.965 12.25 11V14.75M12.25 12.5H9.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.25 6.5H9.25L12.25 1.25H9.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 10.25L3.25 12.5L5.5 10.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.25 3.5V12.5"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (name === "sort-unfinished") {
      return (
        <svg
          className={className}
          data-cy={dataCy}
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.25 3.75L4.25 0.75M4.25 0.75L7.25 3.75M4.25 0.75V11.25"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.75 8.25L11.75 11.25M11.75 11.25L8.75 8.25M11.75 11.25V0.75"
            stroke="#16ABF8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  }, [name]);
};

export default memo(Icon);
