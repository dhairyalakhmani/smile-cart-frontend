import React from "react";

const EmptyCartIcon = ({ className = "mb-0 h-48 w-48 text-gray-200" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3h2l3.6 7.59L5 14v2h14v-2H6.41l1.58-1.59 7.01-7.01 1.41-1.4 1.4 1.41L12.82 12H19l1.41-7H7.1l-1.4-3.1L3 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
    />
    <path
      d="M17 10l-4 4m0-4l4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
    />
  </svg>
);

export default EmptyCartIcon;
