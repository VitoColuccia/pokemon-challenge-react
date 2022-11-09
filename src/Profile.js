import React from 'react';

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {imageUrl: ''};
     }

    

    handleShiny = () => {
        this.setState({imageUrl: this.props.pokemon.sprites?.front_shiny});
    }

    handleDefault = () => {
        this.setState({imageUrl: this.props.pokemon.sprites?.front_default});
    }

    

    componentDidUpdate(prevProps){
        if(prevProps.pokemon !== this.props.pokemon){
            this.setState({imageUrl: this.props.pokemon.sprites?.front_default});
        }
    }

    componentDidMount(){
        this.setState({imageUrl: this.props.pokemon.sprites?.front_default});
    }
  
    render() {
        const stats = this.props.pokemon.stats?.map(e => <div key={e.stat.name}><label htmlFor={e.stat.name}>{e.stat.name}</label><progress max="100" value={e.base_stat} id={e.stat.name}/></div> )
      return (
        <div>
          <h2>Ecco i tuoi risultati per [{this.props.pokemon.name}]</h2>
          <div className="row">
            <div className="column" style={{textAlign: "center"}}>Nome: {this.props.pokemon.name}</div>
            <div className="column" style={{textAlign: "center"}}>Peso: {this.props.pokemon.weight}</div>
            <div className="column" style={{textAlign: "center"}}>Altezza: {this.props.pokemon.height}</div>
          </div>
          <hr />
          <div className="row">
            <div className="column column-50">
                <div className="row row-center">
                    <div className="column column-50"><img src={this.state.imageUrl} alt="immagine pokemon" style={{minWidth: "100%"}}/></div>
                    <div className="column column-25 column-offset-25">
                        <input type="button" className="button button-outline" value="DEFAULT" onClick={this.handleDefault} style={{minWidth: "100%"}}/>
                        <input type="button" className="button button-outline" value="SHINY" onClick={this.handleShiny} style={{minWidth: "100%"}}/>
                    </div>
                </div>
            </div>
            <div className="column">
                <h3>Statistiche:</h3>
                {stats}
            </div>
          </div>
          {//this.props.pokemon.name && (<input type="button" className='button' value="AGGIUNGILO AL POKEDEX" onClick={this.props.handleAddPokedex}/>)
          }
          <input type="button" className='button' value="AGGIUNGILO AL POKEDEX" onClick={this.props.handleAddPokedex} disabled={this.props.isPreferite}/>
        </div>
      );
    }
  }


  export default Profile;