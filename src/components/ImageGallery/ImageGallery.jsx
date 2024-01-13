import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import * as API from 'components/services/api';
const perPage = 12;

export class ImagesGalery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.textSearch !== this.props.textSearch) {
      this.setState({ isLoading: true });

      API.getAllImages(this.props.textSearch, this.state.page, perPage)
        .then(images => {
          this.setState(prevState => ({
            images:
              this.state.page === 1
                ? images.hits
                : [...prevState.images, ...images.hits],
            totalPages: Math.floor(images.totalHits / perPage),
          }));
        })
        .catch(error => {
          console.log('error: >>', error);
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        {error && <h2>{error.message}</h2>}
        {isLoading && <h1>...LOADER</h1>}
        <ul>
          {images &&
            images.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem key={id} tags={tags} smallUrl={webformatURL} />
            ))}
        </ul>
      </>
    );
  }
}
