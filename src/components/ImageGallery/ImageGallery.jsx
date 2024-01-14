import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import * as API from 'components/services/api';
import { List } from './ImageGallery.styled';
import { BtnWrapper } from 'components/Button/Button.styled';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { ModalPicture } from 'components/Modal/Modal.styled';

// const perPage = 12;

export class ImagesGalery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: '',
    totalPages: 0,
    onModal: false,
    selectImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.textSearch !== this.props.textSearch ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      API.getAllImages(this.props.textSearch, this.state.page)
        .then(images => {
          this.setState(prevState => ({
            images:
              this.state.page === 1
                ? images.hits
                : [...prevState.images, ...images.hits],
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => {
          console.log('error: >>', error);
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  LoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showModal = (largeImageURL, tags) => {
    this.setState({
      onModal: true,
      selectImage: {
        largeImageURL,
        tags,
      },
    });
  };

  closeModal = () => {
    this.setState({ onModal: false, selectImage: {} });
  };

  render() {
    const { images, isLoading, error, page, totalPages, onModal, selectImage } =
      this.state;
    return (
      <>
        {error && <h2>{error.message}</h2>}
        {isLoading && <h1>...LOADER</h1>}
        <List>
          {images &&
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                item={image}
                showModal={this.showModal}
              />
            ))}
        </List>

        {images.length > 0 && page <= totalPages && (
          <BtnWrapper>
            <Button onClick={this.LoadMore} type="button">
              Load more
            </Button>
          </BtnWrapper>
        )}
        {onModal && (
          <Modal close={this.closeModal}>
            <ModalPicture
              src={selectImage.largeImageURL}
              alt={selectImage.tags}
            />
          </Modal>
        )}
      </>
    );
  }
}
