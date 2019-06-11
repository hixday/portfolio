import React, {Component} from 'react';
// import Header from './components/partial/Header';
// import Footer from './components/partial/Footer';


import './scss/style.scss';

class App extends Component{
  render() {
    return (

    <div className="App">

      
      {this.props.children}
    </div>
    )
  }
  }
export default App;
