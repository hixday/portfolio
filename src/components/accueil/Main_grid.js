import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class Main_grid extends Component {
    render() {
        return (
            <div className="main-grid">
                <div className="box1">
                    <i className="fas fa-book-open"></i>
                    <p>Mon Portfolio</p>   
                </div>
                <div className="box2"></div>
                <div className="box3"></div>

                <div className="box4">
                    <div className="box-inner">
                        <Link to="/contact">
                            <div className="front-contact"></div>
                            <div className="back">
                              <div className="info-grid-card">
                                <i className="fas fa-address-card"></i>
                                <p>Me Contacter</p>
                              </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="box5">
                <div className="box-inner">
                        <Link to="/competences">
                            <div className="front-comp"></div>
                            <div className="back">
                              <div className="info-grid-card">
                                <i class="fas fa-lightbulb"></i>
                                <p>Mes Compétences</p>
                              </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="box6">

                <div className="box-inner">
                        <Link to="/realisations">
                            <div className="front-real"></div>
                            <div className="back">
                              <div className="info-grid-card">
                              <img src={require('../../images/icones/creation.svg')} alt="responsive" className="icon-real"/>
                                <p>Mes Réalisations</p>
                              </div>
                            </div>
                        </Link>
                    </div>  
                </div>
                <div className="box7"></div>
                <div className="box8"></div>
                <div className="box9"></div>

            </div>
        )
    }
}

export default Main_grid;