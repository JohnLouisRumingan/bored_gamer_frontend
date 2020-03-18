import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import {addGamesToEvent} from '../redux/actions'


class GameAddForm extends React.Component {

    handleDropdown = (e, {value}) => {
        
        //note: {value} is used with semantic react components. Allows the use of arrays 
        this.setState({
            chosenGames: value  
        })
    }

    
    render(){
        
        const gameOptions = [...this.props.gamesInCollection]
        const cloneOptions = [];
        gameOptions.forEach(game => {
            let obj = {};
            obj["key"] = game.game_id
            obj["text"] = game.name
            obj["value"] = game.id
            cloneOptions.push(obj)
        })

        return (
            <div>
                <Form onSubmit={()=> {this.props.addGamesToEvent(this.props.profile.id, this.props.meetup_id, this.state.chosenGames)}}>
                    <Form.Field>
                    <label>Games you're bringing:</label>
                    <Dropdown placeholder='Games' fluid multiple selection options={cloneOptions} 
                        onChange={this.handleDropdown}
                    />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        gamesInCollection: state.gamesInCollection.filter(game => game.owned === true ),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGamesToEvent: (userID, meetupID, chosenGames) => {dispatch(addGamesToEvent(userID,meetupID, chosenGames))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameAddForm)