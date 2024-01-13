import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';

import { ImagesGalery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textSearch: '',
  };

  addtextSearch = value => {
    const { search } = value; // Отримати значення поля search з об'єкта value
    const formatText = search.trim().toLowerCase().split(' ').join('+');
    this.setState({ textSearch: formatText }); // Записати значення як рядок в стан textSearch
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ImagesGalery textSearch={this.state.textSearch} />
        <SearchBar onSubmit={this.addtextSearch} />
      </div>
    );
  }
}
