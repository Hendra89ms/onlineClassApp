import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  backgroundColor,
  color,
  width,
  height,
  className,
  border,
  ...props
}) {
  return (
    <button
      className={`${className} border-${
        border ? "[1px]" : "border-none"
      } border-[${border}] rounded-md ${border && "hover:bg-[#3D5CFF]"} ${
        border && "hover:text-white"
      } duration-300 transition-all hover:duration-300`}
      style={{
        height: `${height}`,
        width: `${width}`,
        backgroundColor: `${backgroundColor}`,
        color: `${color}`,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  border: PropTypes.string,
};

Button.defaultProps = {
  height: "50px",
  width: "120px",
  backgroundColor: "",
  className: "",
  border: "#3D5CFF",
};

export default Button;
