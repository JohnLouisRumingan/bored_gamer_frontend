import React from 'react'
import { connect } from 'react-redux'
import './css/meetup-form.css'
import { newEvent } from '../redux/actions'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class MeetupForm extends React.Component {

    constructor(){
        super()
        this.state = {
            event: "",
            description: "",
            location: "",
            date: new Date(),

        }
    }

    handleChange = (e, key) => {

        console.log("key:", key, "value:", e.target.value)
        let returnObj = {}
        returnObj[key] = e.target.value
        this.setState(returnObj)
    }
    handleRadio = (e, { value }) => this.setState({ value })

    render() {

        const { value } = this.state 
        const {date, profile} = this.props

        return (
            <div className="meetup-form">
                <Form onSubmit={() => /*this.props.newEvent(this.state)*/ console.log(this.state, date, profile)}>
                    <Form.Field>
                        <label>Event Name</label>
                        <input placeholder='Event Name' value={this.state.event} onChange={(e) => {this.handleChange(e, "event")}}/>
                    </Form.Field>
                    <Form.Field>
                        <Form.TextArea label='Description' placeholder='Enter Description here' value={this.state.description} onChange={(e) => {this.handleChange(e, "description")}}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Date</label>
                        Please click on a new date on the calendar to change
                        <input  value={date? date : new Date()} readOnly={date? date : new Date()}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>
                        <input placeholder='Location' value={this.state.location} onChange={(e) => {this.handleChange(e, "location")}}/>
                    </Form.Field>
                        <label>Allow other players to bring games?</label>
                    <Form.Group>
                        <br></br>
                        <Form.Radio
                            label='Yes'
                            value="true" 
                            checked={value === "true"}
                            onChange={this.handleRadio}
                        />
                        <Form.Radio
                            label='No'
                            value=""
                            checked={value === ""}
                            onChange={this.handleRadio}
                        />
                    </Form.Group>
                    <br></br>
                    <Button type='submit'>Submit</Button>
                </Form>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        date: state.dateSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newEvent: (formDetails) => {dispatch(newEvent(formDetails))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MeetupForm)