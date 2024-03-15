// sidebar icon
export const SideBarClose = () => {
  return (
    <svg
      width="73"
      height="59"
      className="sm:max-h-[59px] max-h-[36px] sm:max-w-[72px] max-w-[44px] group"
      viewBox="0 0 73 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="72.2847"
        y="59"
        width="50.3769"
        className=" group-hover:w-full transition-all ease-in-out duration-300"
        height="14.9769"
        transform="rotate(-180 72.2847 59)"
        fill="black"
      />
      <rect
        x="72.2847"
        y="37.2154"
        width="72.1615"
        height="14.9769"
        transform="rotate(-180 72.2847 37.2154)"
        fill="black"
      />
      <rect
        x="72.2847"
        y="14.9769"
        className=" group-hover:w-full transition-all ease-in-out duration-300"
        width="50.3769"
        height="14.9769"
        transform="rotate(-180 72.2847 14.9769)"
        fill="black"
      />
    </svg>
  );
};
export const HeroArrow = () => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.1805 25.2371H50.6558C50.2852 25.2371 49.9308 25.3982 49.6811 25.6802L32.0481 46.0036V0.644421C32.0481 0.289989 31.7581 0 31.4037 0H26.5705C26.2161 0 25.9261 0.289989 25.9261 0.644421V46.0036L8.29313 25.6802C8.05147 25.3982 7.69704 25.2371 7.31845 25.2371H0.793683C0.245926 25.2371 -0.0521191 25.8896 0.310368 26.3004L27.0458 57.1118C27.2875 57.3906 27.5862 57.6142 27.9219 57.7674C28.2575 57.9207 28.6222 58 28.9911 58C29.3601 58 29.7247 57.9207 30.0604 57.7674C30.396 57.6142 30.6948 57.3906 30.9365 57.1118L57.6638 26.3004C58.0263 25.8816 57.7283 25.2371 57.1805 25.2371Z"
        fill="black"
      />
    </svg>
  );
};
// minus
export const Minus = ({ id, open }) => {
  return (
    <svg
      width="20"
      height="4"
      viewBox="0 0 20 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={` absolute top-[50%] translate-x-[-50%] translate-y-[-50%] start-[50%] ${
        id === open ? "" : "rotate-90"
      } w-4 h-1 transition-transform`}
    >
      <path
        d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.7955C18.8345 3.00647 18.5484 3.125 18.25 3.125H11.125H8.875H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.7955C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41549 0.954505 1.20451C1.16548 0.993529 1.45163 0.875 1.75 0.875H8.875L11.125 0.875206L18.25 0.875C18.5484 0.875 18.8345 0.993529 19.0455 1.20451C19.2565 1.41549 19.375 1.70163 19.375 2Z"
        fill="#171717"
      />
    </svg>
  );
};
// plus
export const Plus = () => {
  return (
    <svg
      width="20"
      height="4"
      viewBox="0 0 20 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-1 transition-transform absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <path
        d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.7955C18.8345 3.00647 18.5484 3.125 18.25 3.125H11.125H8.875H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.7955C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41549 0.954505 1.20451C1.16548 0.993529 1.45163 0.875 1.75 0.875H8.875L11.125 0.875206L18.25 0.875C18.5484 0.875 18.8345 0.993529 19.0455 1.20451C19.2565 1.41549 19.375 1.70163 19.375 2Z"
        fill="#171717"
      />
    </svg>
  );
};

// demo arrow
export const DemoArrow = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.358 0.454505C9.91866 0.015165 9.20634 0.015165 8.767 0.454505C8.32766 0.893845 8.32766 1.60616 8.767 2.0455L13.5965 6.875H1.6875C1.06618 6.875 0.5625 7.37868 0.5625 8C0.5625 8.62132 1.06618 9.125 1.6875 9.125H13.5965L8.767 13.9545C8.32766 14.3938 8.32766 15.1062 8.767 15.5455C9.20634 15.9848 9.91866 15.9848 10.358 15.5455L17.108 8.7955C17.5473 8.35616 17.5473 7.64385 17.108 7.2045L10.358 0.454505Z"
        fill="black"
      />
    </svg>
  );
};
export const BackTop = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 21 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66426 12.5823V12.0823H8.16426H1.17359L10.0606 1.28831L19.1635 12.0823H12.1893H11.6893V12.5823L11.6893 32.2073H8.66426L8.66426 12.5823Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};
