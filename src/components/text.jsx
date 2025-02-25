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
          className="text-lg md:text-2xl font-medium text-left"
          style={{
            color: `rgb(${255 - scrollPercent * 255}, ${255 - scrollPercent * 255}, ${255 - scrollPercent * 255})`,
            opacity: `${0.3 + scrollPercent * 0.7}`,
          }}
        >
          Our mission is to make carbon trading accessible to all. Carbon Array is revolutionizing the market with a seamless, transparent exchange that ensures fair pricing, boosts visibility, and drives widespread adoption for a sustainable future.
        </p>
      </div>
    </div>
  );
}
