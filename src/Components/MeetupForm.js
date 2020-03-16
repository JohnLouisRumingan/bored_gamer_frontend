import React from 'react'
import { connect } from 'react-redux'
import './css/meetup-form.css'
import { newEvent } from '../redux/actions'
import { Button, Form, Dropdown } from 'semantic-ui-react'

class MeetupForm extends React.Component {

    constructor(){
        super()
        this.state = {
            event: "",
            description: "",
            location: "",
            // date: new Date(),
            chosenGames: [],
        }
    }

    

    
    handleChange = (e, key) => {
        let returnObj = {}
        returnObj[key] = e.target.value
        this.setState(returnObj)
    }
    
    handleRadio = (e, { value }) => this.setState({ allowed: value })
    
    handleDropdown = (e, {value}) => {
        
        //note: {value} is used with semantic react components. Allows the use of arrays 
        this.setState({
            chosenGames: value  
        })
    }
    
    render() {
        
        const { allowed } = this.state 
        const {date, profile} = this.props
        const gameOptions = [...this.props.gamesInCollection]
        // const cloneOptions = Object.assign({}, ...gameOptions.map(game => ({ key: game.game_id, text: game.name, value: game.game_id })));

        const cloneOptions = [];
        gameOptions.forEach(game => {
            let obj = {};
            obj["key"] = game.game_id
            obj["text"] = game.name
            obj["value"] = game.id
            cloneOptions.push(obj)
        })

        // console.log("game options form:", cloneOptions)
        return (
            <div className="meetup-form">
                <Form onSubmit={() => this.props.newEvent(this.state, profile, date? date : new Date()) /*console.log(this.state, date, profile)*/}>
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

                    <Form.Field>
                    <label>Games you're bringing:</label>
                    <Dropdown placeholder='Games' fluid multiple selection options={cloneOptions} 
                        onChange={this.handleDropdown}
                    />
                    </Form.Field>
                    
                    <label>Allow other players to bring games?</label>
                    <Form.Group>
                        <br></br>
                        <Form.Radio
                            label='Yes'
                            value={true} 
                            checked={allowed === true }
                            onChange={this.handleRadio}
                        />
                        <Form.Radio
                            label='No'
                            value={false}
                            checked={allowed === false }
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
        date: state.dateSelected,
        gamesInCollection: state.gamesInCollection.filter(game => game.owned === true ),
        //filters only games that user owns. User cannot bring games they do not own.
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newEvent: (formDetails, profile, date) => {dispatch(newEvent(formDetails, profile,date))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MeetupForm)