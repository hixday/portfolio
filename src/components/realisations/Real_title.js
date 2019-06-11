import React, {Component} from 'react'


class Real_title extends Component {
    render() {
        return (
        <div className="real-title">
            <ul>
                <li>
                <img src={require('../../images/icones/creation-white.svg')} alt="responsive" className="icon-real"/>
                    <h1>Mes Réalisations</h1>
                </li>
            </ul>
        </div>
        )
    }
}

export default Real_title;