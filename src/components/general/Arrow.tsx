import { ChevronsDown } from "lucide-react";
import React from "react";

export default function Arrow({ margin = 40 }) {
  return (
    <div className={`flex justify-center items-center my-${margin}`}>
      <ChevronsDown className=" animate-bounce" color="cyan" size={30} />
    </div>
  );
}
