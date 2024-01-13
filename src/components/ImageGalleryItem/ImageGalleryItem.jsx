export const ImageGalleryItem = ({ id, tags, smallUrl }) => {
  return (
    <li key={id}>
      <div>
        <img src={smallUrl} alt={tags} loading="lazy" />
      </div>
    </li>
  );
};
