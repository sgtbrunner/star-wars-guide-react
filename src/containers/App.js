import React, {Component} from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import CreateList from '../components/SupportFunctions';
import Modal from '../components/Modal';
import {getStats} from '../components/SupportFunctions';
import {getFilms} from '../components/SupportFunctions';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {
  // STATE DECLARATION AND INITIALIZATION
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: '',
      clickedcard: '',
      race: '',
      planet: '',
      movies: '',
      showmodal: false
    }
  }

  // componentDidMount() IS A LIFECYCLE HOOK THAT RUNS ONCE THE APP COMPONENT IS MOUNTED IN 
  // INDEX.HTML. IN THIS CASE, IT UPDATES THIS.STATE.CHARACTERS WITH THE RETURNED ARRAY OF 
  // CHARACTERS FROM GETCHARACTERS()
  componentDidMount() {
  // ** Fetches all characters from SWAPI
    CreateList().then(response => this.setState({characters: response}));
  }

  // TRIGGERED EVERY TIME THE SEARCHBOX CHANGES
  // ** Actively changes displayed characters to seached value
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  // TRIGGERED EVERY TIME A CARD IS CLICKED
  openModal = (event) => {
  // ** Fetches asynchronous character information and open modal
    this.setState({clickedcard: this.state.characters[event.target.id]})
    getStats(this.state.characters[event.target.id].species)
    .then(response => this.setState({race: response}));
    getStats(this.state.characters[event.target.id].homeworld)
    .then(response => this.setState({planet: response}));
    getFilms(this.state.characters[event.target.id].films)
    .then(response => this.setState({movies: response}));
    this.setState({showmodal: true});
  }

  // TRIGGERED EVERYTIME X OR OUTER MODAL IS CLICKED
  onCloseClick = () => {
  // ** Set states to initial values and close modal
    this.setState({
      clickedcard: '',
      race: '',
      planet: '',
      movies: '',
      showmodal: false
    });
  }

  // RENDER TO INDEX.HTML
  render() {
    const filteredCharacters = this.state.characters.filter(character => {
    // Needs .toLowerCase() on both sides of the declaration to compare input to user.name on the same level
        return character.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      } 
    );

    if (!this.state.characters.length) {
        return (
            <div id="temp-page">
              <div className ="page-loader animate-flicker">Please wait...</div>
            </div>      
      )} else {
            return (
              <div>
                <Header />
                <div id="flex-container">
                  <SearchBox searchChange={this.onSearchChange}/>
                  <CardList 
                      characters = {this.state.characters}
                      filteredCharacters = {filteredCharacters}
                      openModal = {this.openModal}
                  />
                  <Modal 
                    showModal = {this.state.showmodal} 
                    character = {this.state.clickedcard}
                    race = {this.state.race}
                    planet = {this.state.planet}
                    movies = {this.state.movies}
                    onCloseClick = {this.onCloseClick}
                  />
                </div>
                <Footer />
              </div>
            )        
        }
  }
}

export default App;