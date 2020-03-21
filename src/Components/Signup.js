import React from 'react'
import { Form, Button, Icon  } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createAccount } from '../redux/actions'


class Signup extends React.Component {

    state={
        username: "",
        password: "",
        password2: "",
        bio: "",
        avatar: "",
        name: "",
        passwordError: "",
        passwordType: true,
        password2Type: true,
        
    }

    changeHandler = (e, key) => {
        let formObj = {};
        formObj[key] = e.target.value;
        this.setState(formObj)
    }

    resetState = () => {
        this.setState({
            username: "",
            password: "",
            password2: "",
            bio: "",
            avatar: "",
            name: "",
        })
    }

    render(){

        return(
            <div> Signup form 
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Username' placeholder='Enter a username'
                            value={this.state.username} onChange={(e) => this.changeHandler(e, "username")}
                        />
                        <Form.Input fluid label='Name' placeholder='Enter your name'
                            value={this.state.name} onChange={(e) => this.changeHandler(e, "name")}
                        />
                        <Form.Input fluid label='Password' placeholder='Enter a password'
                            value={this.state.password} onChange={(e) => this.changeHandler(e, "password")}
                            type={this.state.passwordType? 'password' : 'text'}
                        />
                        <Button onClick={() => this.setState({passwordType: !this.state.passwordType})}><Icon name='eye'/></Button>
                        {this.state.passwordError? 
                            <Form.Input fluid label='Password Re-enter' placeholder='Re-enter Password'
                            value={this.state.password2} onChange={(e) => this.changeHandler(e, "password2")}
                            error={this.state.passwordError}
                            type={this.state.password2Type? 'password' : 'text'}
                            /> 
                        : 
                            <Form.Input fluid label='Password Re-enter' placeholder='Re-enter Password'
                            value={this.state.password2} onChange={(e) => this.changeHandler(e, "password2")}
                            type={this.state.password2Type? 'password' : 'text'}
                            />
                        }
                        <Button onClick={() => this.setState({password2Type: !this.state.password2Type})}><Icon name='eye'/></Button>
                    </Form.Group>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' 
                        value={this.state.bio} onChange={(e)=> {this.changeHandler(e, "bio")}}
                    />
                    <Form.Input fluid label="Avatar" placeholder='Enter url of a picture for your profile'
                        value={this.state.avatar} onChange={(e) => {this.changeHandler(e, "avatar")}}
                    /> 
                    <Form.Button onClick={() => {

                        //placing password check here before backend validations of username/etc.
                        if(this.state.password !== this.state.password2){
                            this.setState({
                                passwordError:  {
                                    content: 'Passwords must match',
                                    pointing: 'above'
                                }
                            })
                        }
                        else if(this.state.password === this.state.password2){
                                this.props.submit(this.state)
                                this.resetState()
                            }


                    }}>
                        Create Account
                    </Form.Button>
                </Form>
                {this.props.error? <Button disabled color="red">{this.props.error}</Button> : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        submit: (accountDetails) => dispatch(createAccount(accountDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)