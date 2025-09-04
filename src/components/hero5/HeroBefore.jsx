import Image from "next/image";
import React from "react";

const HeroBefore = () => {
  return (
    <div className="main">
      <Image
        src="/assets/brown-img.png"
        alt="love me"
        width={475}
        height={650}
        priority={false}
      />
    </div>
  );
};

export default HeroBefore;
