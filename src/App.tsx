import { useEffect, useState } from "react";
import "./App.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import EmblaSlide from "./EmblaSlide";
function App() {
  const [speed] = useState(3);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: speed,
      stopOnInteraction: false,
      stopOnFocusIn: false
    })
  ]);
  const imageURLS = [
    ["../Static/Adidas.png", "../Static/AdidasBW.png"],
    ["../Static/CNN.png", "../Static/CNNBW.png"],
    ["../Static/Mobil.png", "../Static/MobilBW.png"],
    ["../Static/snap.png", "../Static/snapBW.png"]
  ];
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imageURLS.map((url) => {
          return <EmblaSlide URLs={url}></EmblaSlide>;
        })}
      </div>
    </div>
  );
}

export default App;
