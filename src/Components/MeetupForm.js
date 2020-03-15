import React from 'react'
import { connect } from 'react-redux'
import './css/meetup-form.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class MeetupForm extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <div className="meetup-form">
                <Form>
                    <Form.Field>
                    <label>Event Name</label>
                    <input placeholder='Event Name' />
                    </Form.Field>
                    <Form.Field>
                    <Form.TextArea label='Description' placeholder='Enter Description here' />
                    </Form.Field>
                    <Checkbox label='Allow other attendants to bring games' />
                    <br></br>
                    <Button type='submit'>Submit</Button>
                </Form>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = () => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MeetupForm)