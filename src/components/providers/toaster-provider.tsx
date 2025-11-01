"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <div className="z-[99999]">
      <Toaster />
    </div>
  );
};

