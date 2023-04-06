const GalleryItem = (props) => {
  return (
    <figure className={`gallery__item gallery__item--${props.item.id}`}>
      <img
        src={props.item.src}
        alt={props.item.name}
        className="gallery__img"
      />
    </figure>
  );
};
export default GalleryItem;
