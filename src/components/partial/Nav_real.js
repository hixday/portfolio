import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Nav_real extends Component {
    render() {

        var visibility = "hide main-nav";
 
        if (this.props.menuVisibility) {
          visibility = "show main-nav";
        }

        return (

            <div id="slide-menu" 
            onMouseDown={this.props.handleMouseDown} 
            className={visibility}> 

            <div className="main-nav">
                <ul>
                    <li>
                        <IndexLink to="/">
                            <i className="fas fa-book-open"></i>
                            <p>Mon Portfolio</p>
                        </IndexLink>
                    </li>
                    <li>
                        <Link to="/competences">
                            <i class="fas fa-lightbulb"></i>
                            <p>Mes Compétences</p>
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
            </div>
        )
    }
}

export default Nav_real;