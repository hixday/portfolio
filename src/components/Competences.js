import React from 'react';
import Nav_comp from './partial/Nav_comp';
import Comp_title from './competences/Comp_title';
import Comp_info from './competences/Comp_info';
import Comp_prio from './competences/Comp_prio';
import Comp_tech from './competences/Comp_tech';
import MenuButton from './partial/MenuButton';

class Competences extends React.Component {

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
            return (
                <main className="flex real-bg competences">
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Nav_comp menuVisibility={this.state.show}/>
                    
                    <div className="container flex">
                        <div className="comp-left-box">
                            <Comp_title />
                            <Comp_info />
                        </div>
                        <div className="comp-right-box">
                        <Comp_prio/>
                        <Comp_tech/>
                        </div>
                    </div>
                </main>
            )
        }
    }


export default Competences;