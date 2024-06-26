import React from "react";
import PropTypes from "prop-types";

function HomeSvg({ className, color, ...props }) {
  return (
    <svg
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.2 1.025L17.2 6.275C17.4484 6.46129 17.65 6.70286 17.7889 6.98057C17.9277 7.25828 18 7.56451 18 7.875V17.375C18 17.9054 17.7893 18.4141 17.4142 18.7892C17.0391 19.1643 16.5304 19.375 16 19.375H2C1.46957 19.375 0.960859 19.1643 0.585786 18.7892C0.210714 18.4141 0 17.9054 0 17.375V7.875C0 7.56451 0.0722902 7.25828 0.211146 6.98057C0.350001 6.70286 0.551608 6.46129 0.8 6.275L7.8 1.025C8.14619 0.765356 8.56726 0.625 9 0.625C9.43274 0.625 9.85381 0.765356 10.2 1.025Z"
        fill={color}
      />
    </svg>
  );
}

HomeSvg.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

HomeSvg.defaultProps = {
  className: "w-[20px] h-[20px]",
  color: "#3D5CFF",
};

export default HomeSvg;
