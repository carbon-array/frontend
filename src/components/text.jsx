import { useState, useEffect } from "react";

export default function Text() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const percentage = Math.min(scrollY / maxScroll, 1);
      setScrollPercent(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-[80%] max-w-4xl text-center">
        <p
          className="text-lg md:text-2xl font-medium text-center"
          style={{
            color: `rgb(${255 - scrollPercent * 255}, ${255 - scrollPercent * 255}, ${255 - scrollPercent * 255})`,
            opacity: `${0.3 + scrollPercent * 0.7}`,
          }}
        >
          Our startup is pioneering a digital carbon credit exchange platform to transform the way carbon credits are traded by offering a seamless, transparent exchange process. Our digital exchange aims to enhance visibility, ensure fair pricing, and promote the participation for wide scale adoption to create a sustainable future.
        </p>
      </div>
    </div>
  );
}
