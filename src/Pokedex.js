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
          <h1>Pokedex</h1>
          
        </div>
      );
    }
  }


  export default Pokedex;