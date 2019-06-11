import React, {Component} from 'react'

class Comp_prio extends Component {
    render() {
        return (
            <div className="comp-prio">

                    <h2>Mes Priorités</h2>
                    <div className="dots">
                        <div className="dot-content">
                            <span className="dot"><img src={require('../../images/icones/speedometer-white.svg')} alt="responsive" className="icon-prio"/></span>
                            <h4>Rapide</h4>
                            <p>Chargement de page et temps de réponse rapide</p>
                        </div>
                        <div className="dot-content">
                            <span className="dot"><img src={require('../../images/icones/ux.svg')} alt="responsive" className="icon-prio"/></span>
                            <h4>Intuitif</h4>
                            <p>Site web facile à navigation</p>
                        </div>
                       <div className="dot-content">
                            <span className="dot"><img src={require('../../images/icones/responsive-white.svg')} alt="responsive" className="icon-prio"/></span>
                            <h4>Adaptatif</h4>
                            <p>Tous mes sites fonctionneront sur n'importe quel appareil</p>
                        </div>
                        <div className="dot-content">
                            <span className="dot"><img src={require('../../images/icones/loupe.svg')} alt="responsive" className="icon-prio"/></span>
                            <h4>Détails</h4>
                            <p>Attention particulière aux détails</p>
                        </div>
                    </div>
        </div>
        )
    }
}

export default Comp_prio;