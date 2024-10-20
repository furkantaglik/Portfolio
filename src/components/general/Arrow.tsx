import { ChevronsDown } from "lucide-react";
import React from "react";

export default function Arrow({ margin = 40 }: { margin?: number }) {
  return (
    <div className={`flex justify-center items-center my-40`}>
      <ChevronsDown
        aria-label="Scroll down arrow"
        className="animate-bounce"
        color="cyan"
        size={30}
      />
    </div>
  );
}
