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
    <div className="w-full max-w-3xl mx-auto text-center py-16">
      <div className="transition-text">
        <p
          className="text-lg md:text-2xl font-medium transition-all duration-300"
          style={{
            color: `rgb(${scrollPercent * 0}, ${scrollPercent * 0}, ${scrollPercent * 0})`,
            opacity: `${0.3 + scrollPercent * 0.7}`,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
          Duis vehicula ex nec ligula venenatis, sed consequat magna tincidunt. 
          Vivamus luctus elit nec orci congue, sit amet interdum nunc ullamcorper.
        </p>
      </div>
    </div>
  );
}
