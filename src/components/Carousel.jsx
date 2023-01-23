import React, { useState } from "react";

function Carousel() {
  const [index, setIndex] = useState(0);

  const images = [
    "https://upload.wikimedia.org/wikipedia/en/2/2b/Avengers_%28Marvel_Comics%29_vol_3_num_38.jpg",
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400",
  ];

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-0 m-4 rounded-full focus:outline-none"
        onClick={handlePrev}
      >
        Prev
      </button>
      <img
        src={images[index]}
        alt="Carousel Image"
        className="w-full h-64 object-cover rounded-lg"
      />
      <button
        className="absolute right-0 top-0 m-4 rounded-full focus:outline-none bg-black"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
