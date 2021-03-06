import React from 'react';

import './certificationContent.scss';

class CertificationContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'notfoundWarn'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getAlertType(status) {
        let type = ['error', 'warn'].filter( type => status.toLowerCase().includes(type))[0];
        return  type || 'successful';
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            status: 'userError'
        });
    }
    render() {
        const { formText, alertMsgs } = this.props.dataSource;
        
        return (
            <section>
                <div className="certification-content">
                    <div className="certification-content-alerts row">
                        <span className={`alert ${this.getAlertType(this.state.status)}`}>{alertMsgs[this.state.status]}</span>
                    </div>
                    <div className="certification-content-main row">
                        <aside className="column">
                            <figure>
                                <img src="/images/certification/illustration.png" />
                            </figure>
                        </aside>
                        <form className="column" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>{formText.header}</legend>
                                <div className="form-row email">
                                    <label>{formText.emailLabel}</label>
                                    <input type="email" name="mail" />
                                </div>
                                <div className="form-row name">
                                    <label>{formText.nicknameLabel}</label>
                                    <span className="description">{formText.nicknameDescription}</span>
                                    <input type="text" name="name" />
                                </div>
                                <div className="form-row action">
                                    <input type="submit" value={formText.action} />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default CertificationContent