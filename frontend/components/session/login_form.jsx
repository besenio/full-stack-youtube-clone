import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const loginForm = (props) => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        return () => {
            props.clearSessionErrors();
        }
    }, []);

    const update = (field) => {
        return e => {
            setState({...state, [field]: e.currentTarget.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.action(state)
            .then(() => props.history.push('/'))
    }

    const handleDemo = () => {
        e => e.preventDefault();
        props.processDemo({
            email: 'tempura',
            password: 'tempuraa'
        })
        .then(() => props.history.push('/'))
    }

    const handleErrors = () => {
        return (
            <ul>
                {props.errors.map ((error, idx) => (
                    <li key={idx} className="login-form-errors">* {error}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <div className="login-form-page">
                <form className="login-form" onSubmit={handleSubmit}>
                    <header className="login-form-header">
                        <h1><i className="fab fa-youtube"></i></h1>
                        <h3>Sign in</h3>
                        <h4>to continue to ViewTube</h4>
                    </header>
                    <div className="login-form-credentials">
                        <input
                            type="text"
                            placeholder="Email"
                            value={state.email}
                            onChange={update("email")}
                        />
                        <br/>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={state.password}
                            onChange={update("password")}
                        />
                        <br/>
                        <div>{handleErrors()}</div>
                        <div>
                            <Link to="/">Return to Home Page</Link>
                        </div>
                    </div>
                    <div className="login-form-demo">
                        <div>Just browsing? Use demo mode to sign in.</div>
                        <Link to="/" onClick={() => handleDemo()}>Demo Mode</Link>
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

export default loginForm;