import React from 'react';
import Nav_real from './partial/Nav_real';
import Real_title from './realisations/Real_title';
import Real_cards from './realisations/Real_cards';
import MenuButton from './partial/MenuButton';

class Realisations extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
          visible: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
      }

      toggleMenu() {
        this.setState({
            show: !this.state.show
        });
    }
   
    render() {

       {

            return (
                <main className="flex realisations real-bg">
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                        <Nav_real menuVisibility={this.state.show}/>
                        <div className="container flex">
                        <Real_title/>
                        <Real_cards/>
                        </div>
                </main>
            )
        }
    }
}

export default Realisations;
