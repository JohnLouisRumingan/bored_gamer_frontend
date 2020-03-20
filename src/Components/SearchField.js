import React from 'react'
import {connect} from 'react-redux'
import { Form } from 'semantic-ui-react'
import { submitSearchForm} from '../redux/actions'


class SearchField extends React.Component{

    state={
        title: "",
        kickstarter: false,
        designer: "",
        min_players: "",
        max_players: "",
        year_published: "",
        publisher: "",
    }

    changeForm = (e, key) => {

        let formObj = {};
        formObj[key] = e.target.value;

        // console.log(formObj)
        this.setState(formObj)
    }
    
    render(){

        return(
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' placeholder='search for title' 
                            value={this.state.title} onChange={(e) => this.changeForm(e, "title")}/>
                        <Form.Input fluid label='Designer' placeholder='search for designer'
                            value={this.state.designer} onChange={(e) => this.changeForm(e, "designer")}/>
                        <Form.Input fluid label='Publisher' placeholder='search for publisher'
                            value={this.state.publisher} onChange={(e) => this.changeForm(e, "publisher")}/>
                    </Form.Group>
                    <Form.Group align='left'>
                        <Form.Input fluid label='Minimum Players' placeholder='minimum players' type="number"
                            value={this.state.min_players} onChange={(e)=> this.changeForm(e, "min_players")}/>
                        <Form.Input fluid label='Maximum Players' placeholder='maximum players' type="number"
                            value={this.state.max_players} onChange={(e)=> this.changeForm(e, "max_players")}/>
                    </Form.Group>
                    <Form.Group inline>
                        <Form.Checkbox label='Kickstarter' value={this.state.kickstarter} onChange={() => this.setState({kickstarter: !this.state.kickstarter})}/>
                    </Form.Group>
                    <Form.Button onClick={() => this.props.submit(this.state)}>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        submit: (searchParams) => dispatch(submitSearchForm(searchParams))
    }
}

export default connect(null, mapDispatchToProps)(SearchField)