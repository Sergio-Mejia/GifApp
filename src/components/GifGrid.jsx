import { useState, useEffect } from "react";
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
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
