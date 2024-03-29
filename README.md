Project BoredGamer/GameNight:

# BORED GAMER/GAME NIGHT
Welcome to Bored Gamer, where you can explore a selection of board games, save your favorites or add them to your collection. You can create events, join events, and see who is bringing what game to the party! This app uses the API from Board Game Atlas to render detailed game info.

## Video Walkthrough
[![Bored Gamer App description](http://img.youtube.com/vi/BlOVTwTuQAw/0.jpg)](http://www.youtube.com/watch?v=BlOVTwTuQAw "Bored Gamer")


## Available features:
- Users can browse games and events without an account.
### Navigation:
- Users can navigate around the website using the navigation bar.
- Users can use the side drawer navigation bar for smaller devices.
- Users can view more details about a specific game.
    - Information displayed shows picture, description, designer, number of players, and other information.
### User Collection:
- Users can add and remove games from their favorites list.
- Users can add and remove games from their collection.
- Users can view their collection of favorite and owned games on their profile page.
### Events:
- Users can join and leave events as well as add their games to an event.
- Users can see the number of participants at an event.
- Users can decide to allow other users to bring games to an event.
- Users can add games they own to an event.

# Installation
Fork and clone this repo and the [backend repo](https://github.com/jmr-1/bored_gamer_backend)
This app uses [PostgreSQL](https://www.postgresql.org/). 
Go to the directory of the bored-gamer backend repository:
    - Run ``` rails db:create ```
    - Run ```rails db:migrate```
    - Run ```rails server```
After the backend server is running, ```cd``` to the bored-gamer frontend repository:
    - Run ```npm install redux react-redux redux-thunk```
    - Run ```npm start```


# Bored-Gamer Demo

[![Bored Gamer App description](http://img.youtube.com/vi/BlOVTwTuQAw/0.jpg)](http://www.youtube.com/watch?v=BlOVTwTuQAw "Bored Gamer")

# Frameworks and Libraries Used
- Front-end: JavaScript ES6+ and React.js with Redux.js
- Back-end: Ruby on Rails
- Testing: Jest, Enzyme
- Styling: Semantic UI React, CSS
- Auth: JWT & bcrypt

# Author
John-Louis Rumingan 
[Linkedin](https://www.linkedin.com/in/john-louis-rumingan/)
[Medium](https://medium.com/@john.louis.rumingan)

# Contributing
Bug reports and pull requests are welcome on GitHub. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant [code of conduct](https://www.contributor-covenant.org/).

# License 
Code available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT)



# *Current TODO:*
- Update tests before redeployment to Heroku
- Set up CI/CD workflow 
- Add received-invites and sent-invites to user mailbox
- When user invites others to an event, user gets update in received-invites mailbox
- Calendar will use Google Calendar and Google Maps for locations and dates
## Notes:
- Test utils in (./__tests__) folder of root directory
- Component tests found in (./src/Components/__tests__) folder
- Action/dispatch tests found in (./redux) folder
