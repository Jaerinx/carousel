import "./App.css";
import { useState } from "react";
export default function EmblaSlide({ URLs }: { URLs: Array<string> }) {
  const [hover, isHover] = useState(false);
  return (
    <div
      className="embla__slide"
      onMouseEnter={() => {
        isHover(true);
      }}
      onMouseLeave={() => {
        isHover(false);
      }}
    >
      <img src={hover ? URLs[0] : URLs[1]} alt="" height={"80%"} />
    </div>
  );
}
