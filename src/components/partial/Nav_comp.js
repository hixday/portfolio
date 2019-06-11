import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Nav_comp extends Component {

  

    render() {
   
        var visibility = "hide main-nav";
 
        if (this.props.menuVisibility) {
          visibility = "show main-nav";
        }

        return (

           
            <div id="slide-menu" 
            onMouseDown={this.props.handleMouseDown} 
            className={visibility}> 
            
                
                <ul className="">
                    <li>
                        <IndexLink to="/">
                            <i className="fas fa-book-open"></i>
                            <p>Mon Portfolio</p>
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/realisations">
                            <img src={require('../../images/icones/creation-white.svg')} alt="responsive" className="icon-real"/>
                            <p>Mes Réalisations</p>
                        </Link>
                    </li>
                    <li>    
                        <Link to="/contact">
                            <i className="fas fa-address-card"></i>
                            <p>Me Contacter</p>
                        </Link>
                    </li>
                </ul>
              
               
            </div>
           
        )
    }
}

export default Nav_comp;