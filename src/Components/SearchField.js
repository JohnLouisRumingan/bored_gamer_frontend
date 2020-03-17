import React from 'react'
import {connect} from 'react-redux'


class SearchField extends React.Component{

    state={
        search: "",
        kickstarter: false,
        
    }

    render(){

        return(
            <div>Search field here</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

    }
}

export default connect(null, mapDispatchToProps)(SearchField)