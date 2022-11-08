import React from 'react';
import Search from './Search';
import Profile from './Profile';
import Pokedex from './Pokedex';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {pokemon: {}};
    }

    handleSearch = (pokemon) => {
        this.setState({ pokemon: pokemon });
    }
  
    render() {
      return (
        <div className='container'>
          <Search handleSearch={this.handleSearch}/>
          {this.state.pokemon.name && <Profile pokemon={this.state.pokemon}/>}
          <Pokedex />
        </div>
      );
    }
  }


  export default Home;