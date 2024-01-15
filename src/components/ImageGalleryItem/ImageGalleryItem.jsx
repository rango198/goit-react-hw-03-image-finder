import { ImageItem, SmallImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, showModal }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <ImageItem onClick={() => showModal(largeImageURL, tags)}>
      <div>
        <SmallImg src={webformatURL} alt={tags} loading="lazy" />
      </div>
    </ImageItem>
  );
};
