import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const signupForm = (props) => {
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
            setState({...state, [field]: e.currentTarget.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.action(state)
            .then(() => props.history.push('/'));
    }

    const handleErrors = () => {
        return (
            <ul>
                {props.errors.map ((error, idx) => (
                    <li key={idx}>* {error}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <div className="signup-form-page">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <header className="signup-form-header">
                        <h1><i className="fab fa-youtube"></i></h1>
                        <h3>Create your ViewTube Account</h3>
                        <h4>to continue to ViewTube</h4>
                    </header>
                    <div className="signup-form-credentials">
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                value={state.username}
                                onChange={update("username")}
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Your email address"
                                value={state.email}
                                onChange={update("email")}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={update("password")}
                            />
                        </div>
                    </div>
                    <div className="signup-form-errors">{handleErrors()}</div>
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

export default signupForm;