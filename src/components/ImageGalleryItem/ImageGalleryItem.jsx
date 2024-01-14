export const ImageGalleryItem = ({ item, showModal }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <li onClick={() => showModal(largeImageURL, tags)}>
      <div>
        <img src={webformatURL} alt={tags} loading="lazy" />
      </div>
    </li>
  );
};
