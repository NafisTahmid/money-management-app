import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../store/actions/authActions'

class Register extends React.Component {
    state = {
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        error: {}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let {name, email, password, confirmPassword} = this.state
        this.props.register({
            name, email, password, confirmPassword
        })
    }

    render() {
        let {name, email, password, confirmPassword, error} = this.state
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 my-5">
                    <h1 className='text-center d-4'>Register Here</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor='name'>Name:</label>
                            <input type="text"
                                className={error.name ? 'form-control invalid-feedback' : 'form-control'}
                                placeholder='Enter your name'
                                name='name'
                                id='name'
                                value={name}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor='email'>Email:</label>
                            <input type="email"
                                className={error.email ? 'form-control invalid-feedback' : 'form-control'}
                                placeholder='Enter your email'
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor='password'>Password:</label>
                            <input type="password"
                                className={error.password ? 'form-control invalid-feedback' : 'form-control'}
                                placeholder='Please enter your password'
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor='name'>Confirm Password:</label>
                            <input type="password"
                                className={error.confirmPassword ? 'form-control invalid-feedback' : 'form-control'}
                                placeholder='Please confirm your password'
                                name='confirmPassword'
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <Link to='/login'>Already have an account? Login here</Link>
                        <button className='btn btn-primary my-2 d-block'>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null,{register})(Register);