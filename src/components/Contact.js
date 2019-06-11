import React from 'react';
import Nav_contact from './partial/Nav_contact';
import Contact_title from './contact/Contact_title';
import Contact_card from './contact/Contact_card';
import MenuButton from './partial/MenuButton';


class MainFicheMembre extends React.Component {

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
                <main className="flex contact">
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                    <Nav_contact menuVisibility={this.state.show}/>
                    <div className="container flex">
                        <Contact_title/>
                        <Contact_card/>
                    </div>
                </main>
            )
        }
    }
}

export default MainFicheMembre;