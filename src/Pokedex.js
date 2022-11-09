import React from 'react';

class Pokedex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {datalist: [], text: ''};  
    }

    componentDidMount(){
        //caricare dal localStorage
    }
  
    render() {
      return (
        <div>
          <h2>Il tuo Pokedex</h2>
          <div className='row flex-wrap'>
            {this.props.pokedex.map(e => 
                <div key={e.name} className="column column-15 flex-column">
                  <h3>{e.name}</h3>
                  <img src={e.sprites.front_default} alt={e.name}/>
                  <input type="button" className='button' value="MOSTRA" onClick={() => this.props.handleSearch(e)}/>
                  <input type="button" className='button button-outline' value="ELIMINA" onClick={() => this.props.handleDeletePokedex(e)} />
                </div>)}
          </div>
        </div>
      );
    }
  }


  export default Pokedex;