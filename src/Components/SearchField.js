import React from 'react'
import {connect} from 'react-redux'
import { Form } from 'semantic-ui-react'


class SearchField extends React.Component{

    state={
        title: "",
        kickstarter: false,
        designer: null,
        min_players: null,
        max_players: null,
        year_published: null,
        publisher: null,
    }



    render(){

        return(
            <div>
                Search form here
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' placeholder='search for title'/>
                        <Form.Input fluid label='Designer' placeholder='search for designer'/>
                        <Form.Input fluid label='Publisher' placeholder='search for publisher'/>
                    </Form.Group>
                    <Form.Group align='left'>
                        <Form.Input fluid label='Minimum Players' placeholder='minimum players'/>
                        <Form.Input fluid label='Maximum Players' placeholder='maximum players'/>
                    </Form.Group>
                    <Form.Group inline>
                        <Form.Checkbox label='Kickstarter'/>
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

    }
}

export default connect(null, mapDispatchToProps)(SearchField)