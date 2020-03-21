import React from 'react'
import { Form } from 'semantic-ui-react'
import { isThisSecond } from 'date-fns';


class Signup extends React.Component {

    state={
        username: "",

    }

    changeHandler = (e, key) => {
        let formObj = {};
        formObj[key] = e.target.value;
        this.setState(formObj)
    }

    render(){

        return(
            <div> Signup form 
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Username' placeholder='Enter a username'
                            value={this.state.username} onChange={(e) => this.changeHandler(e, "username")}
                        />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default Signup