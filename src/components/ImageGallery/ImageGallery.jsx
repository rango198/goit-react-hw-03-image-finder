import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { List } from './ImageGallery.styled';
import { Modal } from 'components/Modal/Modal';
import { ModalPicture } from 'components/Modal/Modal.styled';

export class ImagesGallery extends Component {
  state = {
    onModal: false,
    selectImage: {},
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
    const { onModal, selectImage } = this.state;
    const { ListImages } = this.props;
    return (
      <>
        <List>
          {ListImages &&
            ListImages.map(image => (
              <ImageGalleryItem
                key={image.id}
                item={image}
                showModal={this.showModal}
              />
            ))}
        </List>

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
