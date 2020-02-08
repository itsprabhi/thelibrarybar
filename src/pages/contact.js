import React, { Component } from 'react'

export class Contact extends Component { 
    render() {
        let map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91283.43345969872!2d-79.7357621310863!3d44.35911785057593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON!5e0!3m2!1sen!2sca!4v1578874659424!5m2!1sen!2sca'
        return (
            <div>
                <div className = 'contact-page' style = {{paddingBottom:"50px"}}>
                    <div className = 'container'>
                        <div className = 'section-heading'>
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <div className = 'home-contact-content'>
                            <div className = 'home-contact-form'>
                                <form>
                                    <input className = 'form-inputs' type = 'email' id = 'email' name = 'email'></input><br />
                                    <input className = 'form-inputs' type = 'text' id = 'name' name = 'name'></input><br />
                                    <textarea className = 'form-inputs home-form-text'></textarea><br />
                                    <input className = 'form-btn' type="submit" value="Submit" />
                                </form>
                            </div>
                            <div className = 'home-contact-text'>
                                <div className = 'home-contact-txt'>
                                    <h5>
                                        Address - 222 abc st, Barrie
                                    </h5>
                                    <h5>
                                        Phone - xxx-xxx-xxxx
                                    </h5>
                                </div>
                                <div className = 'contact-map'>
                                    <iframe className = 'map-embed' src={map} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
