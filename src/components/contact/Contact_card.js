import React, {Component} from 'react'

class Contact_card extends Component {
    render() {
        return (
            <div className="contact-card flex">
                <div className="left-card">
                
                    <div className="photo-card">
                    <img src={require('../../images/moi/sam.jpg')} alt="moi"/>
                    </div>

                    <div className="contact-info">
                        <div className="contact-title">
                            <h2>Vous voulez discuter ?</h2>
                        </div>
                        <div className="contact-text">
                        <p>Il sera un plaisir pour moi de pouvoir prendre contact avec vous. Si vous avez des questions ou désirez faire conaissance vous pouvez m'écrire a tout moment et il me fera plaisir de répondre à toutes vos questions.</p>
                        </div>
                    </div>
                </div>
                <div className="right-card">
                    <div className="phone">
                        <i class="fas fa-mobile-alt"></i>
                        <p>veuillez me contacter par courriel pour un entrerien téléphonique</p>
                    </div>
                    <div className="mail">
                        <i class="far fa-envelope"></i>
                        <p>samuel.faucher@hotmail.com</p>
                    </div>
                    <div className="linkedin">
                        <i class="fab fa-linkedin"></i>
                        <p>Samuel Faucher</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact_card;