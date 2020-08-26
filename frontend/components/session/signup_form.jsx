import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleErrors() {
        return (
            <ul>
                {this.props.errors.map (error => (
                    <li>* {error}</li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {
        return (
            <div>
                
                <div className="signup-form-page">
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <header className="signup-form-header">
                            <h1><i className="fab fa-youtube"></i></h1>
                            <h3>Create your ViewTube Account</h3>
                            <h4>to continue to ViewTube</h4>
                        </header>
                        <div className="signup-form-credentials">
                            <div>
                                <input
                                    type="text"
                                    placeholder="  Username"
                                    value={this.state.username}
                                    onChange={this.update("username")}
                                />
                                <br/>
                                <input
                                    type="text"
                                    placeholder="  Your email address"
                                    value={this.state.email}
                                    onChange={this.update("email")}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="  Password"
                                    value={this.state.password}
                                    onChange={this.update("password")}
                                />
                            </div>
                        </div>
                        <div className="signup-form-errors">{this.handleErrors()}</div>
                        <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <div className="signup-form-footer">
                            <Link to="/login" className="sign-in-link-footer">Sign in instead</Link>
                            <input type="submit" value="Create"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;
