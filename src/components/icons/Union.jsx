import React from "react";
import PropTypes from "prop-types";

function Union({ className }) {
  return (
    <svg
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M21.0001 15.5H6.00011C5.84689 15.4995 5.69582 15.4639 5.5584 15.3962C5.42098 15.3284 5.30083 15.2302 5.20711 15.109L0.20711 8.609C0.0725021 8.43414 -0.000488281 8.21967 -0.000488281 7.999C-0.000488281 7.77833 0.0725021 7.56386 0.20711 7.389L5.20711 0.889001C5.30068 0.767769 5.42084 0.669647 5.55833 0.602202C5.69582 0.534757 5.84697 0.499791 6.00011 0.500001H21.0001C21.2653 0.500001 21.5197 0.605358 21.7072 0.792894C21.8948 0.980431 22.0001 1.23478 22.0001 1.5V14.5C22.0001 14.7652 21.8948 15.0196 21.7072 15.2071C21.5197 15.3946 21.2653 15.5 21.0001 15.5ZM6.49311 2.5L2.26211 8L6.49311 13.5H20.0001V2.5H6.49311ZM14.5001 11.5C14.3688 11.5003 14.2386 11.4746 14.1173 11.4243C13.9959 11.374 13.8857 11.3001 13.7931 11.207L12.0001 9.415L10.2071 11.208C10.0195 11.3955 9.76503 11.5008 9.49976 11.5007C9.23449 11.5006 8.98012 11.3951 8.79261 11.2075C8.6051 11.0199 8.49981 10.7654 8.49991 10.5001C8.5 10.2349 8.60547 9.98051 8.79311 9.793L10.5861 8L8.79311 6.207C8.6976 6.11475 8.62142 6.00441 8.56901 5.88241C8.5166 5.7604 8.48901 5.62918 8.48786 5.4964C8.48671 5.36362 8.51201 5.23194 8.56229 5.10905C8.61257 4.98615 8.68682 4.8745 8.78072 4.78061C8.87461 4.68671 8.98626 4.61246 9.10916 4.56218C9.23205 4.5119 9.36373 4.4866 9.49651 4.48775C9.62929 4.4889 9.76051 4.51649 9.88251 4.5689C10.0045 4.62131 10.1149 4.69749 10.2071 4.793L12.0001 6.586L13.7931 4.793C13.886 4.70009 13.9962 4.62638 14.1175 4.57607C14.2389 4.52576 14.3689 4.49984 14.5003 4.4998C14.6316 4.49975 14.7617 4.52558 14.883 4.5758C15.0044 4.62602 15.1147 4.69966 15.2076 4.7925C15.3005 4.88535 15.3742 4.99558 15.4245 5.11691C15.4749 5.23825 15.5008 5.3683 15.5008 5.49965C15.5009 5.631 15.475 5.76107 15.4248 5.88244C15.3746 6.0038 15.301 6.11409 15.2081 6.207L13.4151 8L15.2081 9.793C15.348 9.93291 15.4432 10.1112 15.4817 10.3052C15.5203 10.4993 15.5004 10.7004 15.4246 10.8831C15.3488 11.0659 15.2205 11.222 15.0559 11.3318C14.8914 11.4416 14.6979 11.5002 14.5001 11.5Z"
        fill="#1F1F39"
      />
    </svg>
  );
}

Union.propTypes = {
  className: PropTypes.string,
};

Union.defaultProps = {
  className: "w-[30px] h-[30px]",
};

export default Union;
