import React from 'react'


const MeetupCard = (props) => {

    console.log("meetup card info:", props.info)
    let {meetup_details:{title, location, other_games_allowed}} = props.info 

    return (
        <div className="meetup-card">
            {title} - {location}
            <br></br>
            {other_games_allowed? "Other games allowed" : "This meetup is for the listed games only"}
        </div>
    )
}


export default MeetupCard 