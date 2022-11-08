import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {datalist: [], text: ''};  
    }

    handleChangeInput = (event) => {
        this.setState({ text: event.target.value });
    }

    handleClick = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + this.state.text;
        fetch(url).then(response => response.json()).then(data => this.props.handleSearch(data))
        .catch(error => console.log("Pokemon non trovato", error));
    }

    componentDidMount(){
        const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
        fetch(urlAllPokemon).then(response => response.json())
            .then(data =>  this.setState({datalist: data.results.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}));
    }
  
    render() {
      return (
        <div>
          <h1>Cerca un pokemon</h1>
          <input type="text" placeholder="e.g. bulbasaur" list="pokemons" onInput={this.handleChangeInput}/>
          <datalist id="pokemons">
            {this.state.datalist}
          </datalist>
          <input className="button" type="button" value="Cerca" onClick={this.handleClick}/>
        </div>
      );
    }
  }


  export default Search;