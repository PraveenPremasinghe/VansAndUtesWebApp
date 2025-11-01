import React from "react";

const Loader = ({ size = "sm", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-4",
  };

  return (
    <span
      className={`${sizeClasses[size]} ${className} ml-1.5 inline-block animate-spin rounded-full border-solid border-white border-t-transparent dark:border-t-transparent`}
    ></span>
  );
};

export default Loader;
