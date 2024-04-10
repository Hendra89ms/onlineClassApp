import React from "react";

function Facebook({ ...props }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 18C0 13.2261 1.89642 8.64773 5.27208 5.27208C8.64773 1.89642 13.2261 0 18 0C22.7739 0 27.3523 1.89642 30.7279 5.27208C34.1036 8.64773 36 13.2261 36 18C35.9843 22.2551 34.4733 26.3692 31.7313 29.623C28.9893 32.8769 25.1908 35.0633 21 35.8L20 35H16L15 35.8C10.8092 35.0633 7.01065 32.8769 4.26866 29.623C1.52668 26.3692 0.0157225 22.2551 0 18H0Z"
        fill="url(#paint0_linear_2_11604)"
      />
      <path
        d="M25.8 18H21V14.5C21 13.1 21.5 12 23.7 12H26V7.4C24.6784 7.16782 23.3414 7.03412 22 7C17.9 7 15 9.5 15 14V18H10.5V23H15V35.7C16.98 36.1 19.02 36.1 21 35.7V23H25L25.8 18Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_11604"
          x1="18"
          y1="34.7618"
          x2="18"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062E0" />
          <stop offset="1" stop-color="#19AFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Facebook;