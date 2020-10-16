import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo() {
        e => e.preventDefault();
        this.props.processDemo({
            email: 'tempura',
            password: 'tempuraa'
        })
        .then(() => this.props.history.push('/'))
    }

    handleErrors() {
        return (
            <ul>
                {this.props.errors.map ((error, idx) => (
                    <li key={idx}>* {error}</li>
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
                <div className="login-form-page">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <header className="login-form-header">
                            <h1><i className="fab fa-youtube"></i></h1>
                            <h3>Sign in</h3>
                            <h4>to continue to ViewTube</h4>
                        </header>
                        <div className="login-form-credentials">
                            <input
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.update("email")}
                            />
                            <br/>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={this.update("password")}
                            />
                            <br/>
                            <p className="login-form-errors">{this.handleErrors()}</p>
                            <div>
                                <Link to="/">Return to Home Page</Link>
                            </div>
                        </div>
                        <div className="login-form-demo">
                            <p>Just browsing? Use demo mode to sign in.</p>
                            <Link to="/" onClick={() => this.handleDemo()}>Demo Mode</Link>
                        </div>
                        <div className="login-form-footer">
                            <Link to="/signup" className="create-account-link">Create account</Link>
                            <input type="submit" value="Sign In"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;
