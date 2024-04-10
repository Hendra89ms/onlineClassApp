import React from "react";
import PropTypes from "prop-types";

function Closed({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <path
        d="M2.00005 0.586538L7.00005 5.58654L12 0.586538C12.0923 0.491028 12.2026 0.414846 12.3246 0.362437C12.4466 0.310028 12.5779 0.282442 12.7106 0.281288C12.8434 0.280134 12.9751 0.305436 13.098 0.355717C13.2209 0.405997 13.3326 0.480251 13.4264 0.574143C13.5203 0.668036 13.5946 0.779688 13.6449 0.902584C13.6952 1.02548 13.7205 1.15716 13.7193 1.28994C13.7181 1.42272 13.6906 1.55394 13.6382 1.67594C13.5857 1.79795 13.5096 1.90829 13.4141 2.00054L8.41405 7.00054L13.4141 12.0005C13.5096 12.0928 13.5857 12.2031 13.6382 12.3251C13.6906 12.4471 13.7181 12.5784 13.7193 12.7111C13.7205 12.8439 13.6952 12.9756 13.6449 13.0985C13.5946 13.2214 13.5203 13.333 13.4264 13.4269C13.3326 13.5208 13.2209 13.5951 13.098 13.6454C12.9751 13.6956 12.8434 13.7209 12.7106 13.7198C12.5779 13.7186 12.4466 13.691 12.3246 13.6386C12.2026 13.5862 12.0923 13.51 12 13.4145L7.00005 8.41454L2.00005 13.4145C1.9078 13.51 1.79746 13.5862 1.67545 13.6386C1.55345 13.691 1.42223 13.7186 1.28945 13.7198C1.15667 13.7209 1.02499 13.6956 0.902096 13.6454C0.7792 13.5951 0.667548 13.5208 0.573655 13.4269C0.479762 13.333 0.405509 13.2214 0.355228 13.0985C0.304947 12.9756 0.279646 12.8439 0.280799 12.7111C0.281953 12.5784 0.30954 12.4471 0.361949 12.3251C0.414358 12.2031 0.49054 12.0928 0.58605 12.0005L5.58605 7.00054L0.58605 2.00054C0.403892 1.81194 0.303097 1.55933 0.305376 1.29714C0.307654 1.03494 0.412823 0.784128 0.598231 0.59872C0.783639 0.413312 1.03445 0.308143 1.29665 0.305864C1.55885 0.303586 1.81145 0.40438 2.00005 0.586538Z"
        fill="#1F1F39"
      />
    </svg>
  );
}

Closed.propTypes = {
  className: PropTypes.string,
};

Closed.defaultProps = {
  className: "w-[20px] h-[20px] cursor-pointer",
};

export default Closed;