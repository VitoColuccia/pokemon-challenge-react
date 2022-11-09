import React from 'react';
import Search from './Search';
import Profile from './Profile';
import Pokedex from './Pokedex';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {pokemon: {}, pokedex: [], isPreferite: false};
    }

    handleSearch = (pokemon) => {
      console.log(pokemon);
        this.setState({ 
          pokemon: pokemon,
          isPreferite: this.state.pokedex.filter(e => e.name === pokemon.name).length > 0 || this.state.pokedex.length > 9
        });
    }

    handleAddPokedex = () => {
      const pokedex = this.state.pokedex;
      const obj = {
        name:this.state.pokemon.name,
        height: this.state.pokemon.height,
        weight: this.state.pokemon.weight,
        sprites: this.state.pokemon.sprites,
        stats: this.state.pokemon.stats
      };
      pokedex.push(obj);
      localStorage.setItem('pokedex', JSON.stringify(pokedex));
      this.setState({ pokedex: pokedex, isPreferite: true });
    }

    handleDeletePokedex = (pokemon) => {
      const pokedex = this.state.pokedex.filter(e => e.name !== pokemon.name);
      this.setState({ 
        pokedex: pokedex,  
        isPreferite: pokedex.filter(e => this.state.pokemon?.name === e.name).length > 0
      });
      localStorage.setItem('pokedex', JSON.stringify(pokedex));
    }

    componentDidMount(){
      this.setState({pokedex: JSON.parse(localStorage.getItem('pokedex')) || []});
    }
  
    render() {
      return (
        <div className='container'>
          <Search handleSearch={this.handleSearch}/>
          {this.state.pokemon.name && <Profile 
                                        pokemon={this.state.pokemon}  
                                        handleAddPokedex={this.handleAddPokedex} 
                                        isPreferite={this.state.isPreferite}/>}
          <Pokedex pokedex={this.state.pokedex} handleSearch={this.handleSearch} handleDeletePokedex={this.handleDeletePokedex}/>
        </div>
      );
    }
  }


  export default Home;