import React from 'react'
import './css/about.css'
import { Icon, Button } from 'semantic-ui-react'

const About = () => {

    return (
        <div className='about'>
            <div className='about-content'>

                <br></br><br></br>
                <p>
                Hi, I'm John-Louis Rumingan. I made this app while discussing with my friends one day how wonderful
                it would be if we could store the games in our collection somewhere and make events with our collection.
                </p>
                <p>
                    This app allows you to create a collection, favorite games, and join game nights. 
                    It allows you to see what games are being played on game nights.
                    You can add your own games to these game nights or, if you'd like, invite others!
                </p>
                <p>
                    Created with Ruby on Rails framework for the back-end and JavaScript with React.js and Redux library
                    on the front-end. CSS used alongside with Semantic-UI-React for style.
                </p>
                <p>
                    <center><br></br>
                    Connect with me on: <br></br>
                    <Button.Group color='blue'>
                        <a href='https://www.linkedin.com/in/john-louis-rumingan/'>
                        <Button icon>
                            <Icon name="linkedin"/>
                        </Button>
                        </a>
                        <a href='https://github.com/jmr-1'>
                        <Button icon>
                            <Icon name='github'/>
                        </Button>
                        </a>
                        <a href='https://medium.com/@john.louis.rumingan'>
                        <Button icon>
                            <Icon name='medium'/>
                        </Button>
                        </a>
                    </Button.Group>
                    </center>
                </p>
            </div>
        </div>
    )
}

export default About