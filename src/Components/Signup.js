import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createAccount } from '../redux/actions'


class Signup extends React.Component {

    state={
        username: "",
        password: "",
        password2: "",
        bio: "",
        avatar: "",
        
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
                        <Form.Input fluid label='Password' placeholder='Enter a password'
                            value={this.state.password} onChange={(e) => this.changeHandler(e, "password")}
                        />
                        <Form.Input fluid label='Password Re-enter' placeholder='Re-enter Password'
                            value={this.state.password2} onChange={(e) => this.changeHandler(e, "password2")}
                        />
                    </Form.Group>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' 
                        value={this.state.bio} onChange={(e)=> {this.changeHandler(e, "bio")}}
                    />
                    <Form.Input fluid label="Avatar" placeholder='Enter url of a picture for your profile'
                        value={this.state.avatar} onChange={(e) => {this.changeHandler(e, "avatar")}}
                    /> 
                    <Form.Button onClick={() => {
                            this.props.submit(this.state)
                            this.resetState()
                        }}>
                        Create Account
                    </Form.Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        submit: (accountDetails) => dispatch(createAccount(accountDetails))
    }
}

export default connect(null, mapDispatchToProps)(Signup)