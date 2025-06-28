import React from "react";
import PropTypes from "prop-types";

/**
 * Card component for boxed content layout
 * @param {Object} props
 * @param {string} props.className - Additional Tailwind classes
 * @param {React.ReactNode} props.children - Card content
 */
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-transform duration-300 hover:scale-105 ${className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};