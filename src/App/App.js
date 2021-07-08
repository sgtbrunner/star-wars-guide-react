import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { getCharacters } from '../redux/characters/characters.actions';
import { createList, getStats, getFilms } from '../utils/functions.utils';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchfield: '',
      clickedcard: '',
      race: '',
      planet: '',
      movies: '',
      showmodal: false,
    };
  }

  componentDidMount() {
    // this.props.getCharacters();
    createList().then((response) => this.setState({ characters: response }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  openModal = (event) => {
    this.setState({ clickedcard: this.state.characters[event.target.id] });
    getStats(this.state.characters[event.target.id].species).then((response) =>
      this.setState({ race: response })
    );
    getStats(this.state.characters[event.target.id].homeworld).then((response) =>
      this.setState({ planet: response })
    );
    getFilms(this.state.characters[event.target.id].films).then((response) =>
      this.setState({ movies: response })
    );
    this.setState({ showmodal: true });
  };

  onCloseClick = () => {
    this.setState({
      clickedcard: '',
      race: '',
      planet: '',
      movies: '',
      showmodal: false,
    });
  };

  render() {
    const filteredCharacters = this.state.characters.filter((character) => {
      return character.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if (!this.state.characters.length) {
      return (
        <div id="temp-page">
          <div className="page-loader animate-flicker">Please wait...</div>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div id="flex-container">
          <SearchBox searchChange={this.onSearchChange} />
          <CardList
            characters={this.state.characters}
            filteredCharacters={filteredCharacters}
            openModal={this.openModal}
          />
          <Modal
            showModal={this.state.showmodal}
            character={this.state.clickedcard}
            race={this.state.race}
            planet={this.state.planet}
            movies={this.state.movies}
            onCloseClick={this.onCloseClick}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const maptDispatchToProps = (dispatch) => ({
  getCharacters: () => dispatch(getCharacters()),
});

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
});

export default connect(mapStateToProps, maptDispatchToProps)(App);
