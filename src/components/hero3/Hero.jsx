import Image from "next/image";

const Hero = () => {
  return (
    <div className="main">
      <Image
        src="/assets/love-story-img.png"
        alt=""
        priority={false}
        width={475}
        height={630}
      />
    </div>
  );
};

export default Hero;
