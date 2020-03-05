import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
  state = {
		name: '',
		password: ''
	};
	setusername = (event) => {
		console.log('email', this.state.email);
		this.setState({ email: event.target.value });
	};
	setpassword = (event) => {
		this.setState({ password: event.target.value });
	};
	move = (event) => {
		if (this.state.email === 'xyz@yahoo.com' && this.state.password === '7890') {
			this.props.history.push('/dashboard');
		} else {
			window.alert('Incorrect username or  password');
		}
		event.preventDefault();
	};
  
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" 
                 htmlFor="email"
                >
                  E-Mail Address
                </label>
                <input type="email"
                 id="email" 
                 className="FormField__Input" 
                 placeholder="Enter your email" 
                onChange={(event) => this.setusername(event)}
                />
            </div>
            <div className="FormField">
                <label className="FormField__Label" 
                 htmlFor="password"
                >
                  Password
                </label>
                <input type="password" 
                 id="password" 
                 className="FormField__Input" 
                 placeholder="Enter your password" 
                 onChange={(event) => this.setpassword(event)}
                />
            </div>
            <div className="FormField">
                 <button onClick={(event) => this.move(event)} className="FormField__Button mr-20" 
                 >
                    Sign In
                 </button> 
                 <Link to="/" className="FormField__Link"
                 >
                    Create an account
                 </Link>
            </div>
          </form>
        </div>
      );
    }
}

export default SignInForm;
