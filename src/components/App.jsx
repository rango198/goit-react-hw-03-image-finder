import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import * as API from 'components/services/api';
import { BtnWrapper } from 'components/Button/Button.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    textSearch: '',
    images: [],
    page: 1,
    isLoading: false,
    error: '',
    totalPages: 0,
    selectImage: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.textSearch !== this.state.textSearch ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      API.getAllImages(this.state.textSearch, this.state.page)
        .then(images => {
          console.log(images);
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
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  addtextSearch = value => {
    const { search } = value;
    const formatText = search.trim().toLowerCase().split(' ').join('+');
    this.setState({ textSearch: formatText, page: 1, images: [] });
  };

  render() {
    const { images, isLoading, error, page, totalPages, textSearch } =
      this.state;
    // if (textSearch.length > 0 && images.length === 0) {
    //   return (
    //     <div>
    //       <p>{`Oops... there are no images matching your search... `}</p>
    //     </div>
    //   );

    return (
      <div>
        {error && <h2>{error.message}</h2>}
        {isLoading && <Loader />}
        <SearchBar onSubmit={this.addtextSearch} />
        <ImagesGallery ListImages={images} />
        {textSearch.length > 0 && images.length === 0 && (
          <div>
            <p>{`Oops... there are no images matching your search... `}</p>
          </div>
        )}
        {images.length > 0 && page <= totalPages && (
          <BtnWrapper>
            <Button onClick={this.LoadMore} type="button">
              Load more
            </Button>
          </BtnWrapper>
        )}
      </div>
    );
  }
}
