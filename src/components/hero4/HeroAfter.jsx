import Image from "next/image";
import React from "react";

const HeroAfter = () => {
  return (
    <div className="main">
      <Image
        src="/assets/white-img.png"
        alt="love me"
        width={475}
        height={630}
        priority={false}
      />
    </div>
  );
};

export default HeroAfter;
