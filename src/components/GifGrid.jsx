import { getGifts } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {
  getGifts(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
