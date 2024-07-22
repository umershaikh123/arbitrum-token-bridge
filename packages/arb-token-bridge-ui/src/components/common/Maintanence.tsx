import Image from "next/image";
import React from "react";
import maintanenceImage from "@/images/maintanence.png";

export default function Maintanence() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-semibold sm:text-6xl lg:text-7xl">
        Maintanence Ongoing
      </h1>
      <Image
        src={maintanenceImage}
        width={400}
        height={400}
        alt="screw and wrench"
      />
    </div>
  );
}
