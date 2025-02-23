import React from "react";

export default function CardLayout({ children, className }) {
  return <div className={`card-container ${className ?? ""}`}>{children}</div>;
}
