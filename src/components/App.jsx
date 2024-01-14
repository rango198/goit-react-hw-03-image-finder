import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';

import { ImagesGalery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    textSearch: '',
  };

  addtextSearch = value => {
    const { search } = value;
    const formatText = search.trim().toLowerCase().split(' ').join('+');
    this.setState({ textSearch: formatText, page: 1, images: [] });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.addtextSearch} />
        <ImagesGalery textSearch={this.state.textSearch} />
        {/* <Modal /> */}
      </div>
    );
  }
}
