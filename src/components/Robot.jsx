import React, { useEffect } from "react";

export default function Robot() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".eye").forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        eye.style.transform = `translate(${(x - 50) / 10}%, ${(y - 50) / 10}%)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-gray-900 rounded-full w-40 h-40 flex justify-between items-center px-8 relative overflow-hidden">
        <div className="eye bg-white w-6 h-6 rounded-full transition-transform"></div>
        <div className="eye bg-white w-6 h-6 rounded-full transition-transform"></div>
      </div>
    </div>
  );
}