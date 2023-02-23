import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";
import { getGifts } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImage = await getGifts(category);
    setImages(newImage);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem 
            key={ image.id }
            { ...image } 
          />
        ))}
      </div>
    </>
  );
};
