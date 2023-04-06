import GalleryItem from "./GalleryItem";
import { imgItems } from "../../../store/imgItems";

const Gallery = (props) => {
  return (
    <section className="gallery">
      {imgItems.map((i) => (
        <GalleryItem key={i.id} item={i} />
      ))}
    </section>
  );
};
export default Gallery;
