// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
// import FriendList from './components/FriendList'
// import FriendForm from './Forms/FriendForm'
import CastMemberList from './components/CastMembers/CastMemberList'
import CastMemberForm from './components/CastMembers/CastMemberForm'
import CastMemberDetail from './components/CastMembers/CastMemberDetails'
import CastMemberEditForm from './components/CastMembers/CastMemberEditForm'
import NoteList from './components/notes/NoteList'
import NoteForm from './components/notes/NoteForm'
import NoteEditForm from './components/notes/NoteEditForm'
import NewsList from './components/news/NewsList'
import NewsForm from './components/news/NewsForm'
import NewsDetail from './components/news/NewsDetail'
import JokeList from './components/jokes/JokeList'
import JokeForm from './components/jokes/JokeForm'
import JokeDetail from './components/jokes/JokeDetail'
import JokeEditForm from './components/jokes/JokeEditForm'
import CrewMemberList from './components/crewMembers/CrewMemberList'
import CrewMemberForm from './components/crewMembers/CrewMemberForm'
import CrewMemberDetail from './components/crewMembers/CrewMemberDetails'
import CrewMemberEditForm from './components/crewMembers/CrewMemberEditForm'

export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    news: [],
    notes: [],
    castMembers: [],
    jokes: [],
    crewMembers: [],
    friends: [],
    isLoaded: false
  }

  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

  // getAllUsers = user => DataManager.getAll("users", user)
  //   .then(users => this.setState({
  //     users: users
  //   }))

  deleteUser = id => DataManager.delete("user", id)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

  editUser = (id, user) => DataManager.edit("user", id, user)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

  addNews = news => DataManager.add("news", news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  deleteNews = id => DataManager.delete("news", id)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  editNews = (id, news) => DataManager.edit("news", id, news)
    .then(() => DataManager.getAll("news"))
    .then(news => this.setState({
      news: news
    }))

  addNote = notes => DataManager.add("notes", notes)
    .then(() => DataManager.getAll("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  deleteNote = id => DataManager.delete("notes", id)
    .then(() => DataManager.getAll("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  editNote = (id, motes) => DataManager.edit("notes", id, notes)
    .then(() => DataManager.getAll("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  addCastMember = CastMember => DataManager.add("castMembers", CastMember)
    .then(() => DataManager.getUnfinishedCastMembers("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  deleteCastMember = id => DataManager.delete("castMembers", id)
    .then(() => DataManager.getUnfinishedCastMembers("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  editCastMember = (id, castMembers) => DataManager.edit("castMembers", id, castMembers)
    .then(() => DataManager.getUnfinishedCastMembers("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  addJoke = joke => DataManager.add("jokes", joke)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  deleteJoke = id => DataManager.delete("jokes", id)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  editJoke = (id, jokes) => DataManager.edit("jokes", id, jokes)
    .then(() => DataManager.getAll("jokes"))
    .then(jokes => this.setState({
      jokes: jokes
    }))

  addCrewMember = crewMember => DataManager.add("crewMembers", crewMember)
    .then(() => DataManager.getAllAscend("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  deleteCrewMember = id => DataManager.delete("crewMembers", id)
    .then(() => DataManager.getAllAscend("crewMembers"))
    .then(crewMembers => this.setState({
      CrewMembers: CrewMembers
    }))

  editCrewMember = (id, crewMembers) => DataManager.edit("crewMembers", id, crewMembers)
    .then(() => DataManager.getAllAscend("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  addFriend = friend => DataManager.add("friends", friend)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  deleteFriend = id => DataManager.delete("friends", id)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  editFriend = (id, friends) => DataManager.edit("friends", id, friends)
    .then(() => DataManager.getAll("friends"))
    .then(friends => this.setState({
      friends: friends
    }))

  componentDidMount() {

    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })
      .then(() => {
        DataManager.getAll("news")
          .then(allNews => {
            newState.news = allNews
          })
          .then(() => {
            DataManager.getAll("notes")
              .then(allNotes => {
                newState.notes = allNotes
              })
              .then(() => {
                DataManager.getUnfinishedCastMembers("castMembers")
                  .then(allCastMembers => {
                    newState.castMembers = allCastMembers
                  })
                  .then(() => {
                    DataManager.getAll("jokes")
                      .then(allJokes => {
                        newState.jokes = allJokes
                      })
                      .then(() => {
                        DataManager.getUnfinishedCastMembers("crewMembers")
                          .then(allcrewMembers => {
                            newState.crewMembers = allCrewMembers
                          })
                          .then(() => {
                            DataManager.getAll("friends")
                              .then(allFriends => {
                                newState.friends = allFriends
                              })
                              .then(() => {
                                this.setState(newState)
                              })
                          })
                      })
                  })
              })
          })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" render={(props) => {
          return <Register {...props}
            addUser={this.addUser}
            users={this.state.users} />
        }} />
        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsList {...props}
              deleteNews={this.deleteNews}
              news={this.state.news} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/news/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsForm {...props}
              addNews={this.addNews} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/news/:newsId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewsDetail {...props}
              deleteNews={this.deleteNews}
              news={this.state.news} />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/notes" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteList {...props}
              users={this.state.users}
              editNote={this.editNote}
              deleteNote={this.deleteNote}
              notes={this.state.notes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/notes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteForm {...props}
              notes={this.state.notes}
              addNote={this.addNote} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/notes/edit/:noteId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteEditForm  {...props} editNote={this.editNote} notes={this.state.notes} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/CastMembers" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberList {...props}
              deleteCastMember={this.deleteCastMember}
              editCastMember={this.editCastMember}
              CastMembers={this.state.CastMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/CastMembers/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberForm {...props}
              addCastMember={this.addCastMember} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/CastMembers/:CastMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberDetail {...props} deleteCastMember={this.deleteCastMember} castMembers={this.state.castMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/CastMembers/edit/:CastMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberEditForm  {...props} editCastMember={this.editCastMember} castMembers={this.state.castMembers} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/jokes" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeList {...props}
              deleteJoke={this.deleteJoke}
              jokes={this.state.jokes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/jokes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeForm {...props}
              addJoke={this.addJoke} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/jokes/:jokeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeDetail {...props} deleteJoke={this.deleteJoke} jokes={this.state.jokes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/jokes/edit/:jokeId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <JokeEditForm {...props} editJoke={this.editJoke} deleteJoke={this.deleteJoke} jokes={this.state.jokes} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> 
        < Route exact path="/CrewMembers" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberList {...props}
              deleteCrewMember={this.deleteCrewMember}
              CrewMembers={this.state.CrewMembers} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />
        < Route exact path="/CrewMembers/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberForm {...props}
              addCrewMember={this.addCrewMember} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/CrewMembers/:CrewMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberDetail {...props} deleteCrewMember={this.deleteCrewMember} CrewMembers={this.state.CrewMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/CrewMembers/edit/:CrewMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberEditForm  {...props} editCrewMember={this.editCrewMember} CrewMembers={this.state.CrewMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        {/* <Route exact path="/friends" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendList {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/friends/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendForm {...props}
              addFriend={this.addFriend} />
          } else {
            return <Redirect to="/" />
          }
        }} /> */}
        {/* <Route exact path="/friends/:friendId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <FriendDetail {...props} deleteFriend={this.deleteFriend} friends={this.state.friends} />
          } else {
            return <Redirect to="/" />
          }
        }} /> */}
      </React.Fragment >
    )

  }
}