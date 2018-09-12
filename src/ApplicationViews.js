import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/homepage/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
import CastMemberDetail from './components/cast/CastMemberDetails'
import CastMemberEditForm from './components/cast/CastMemberEditForm'
import CastMemberForm from './components/cast/CastMemberForm'
import CastMemberList from './components/cast/CastMemberList'
import CrewMemberDetail from './components/crew/CrewMemberDetails'
import CrewMemberEditForm from './components/crew/CrewMemberEditForm'
import CrewMemberForm from './components/crew/CrewMemberForm'
import CrewMemberList from './components/crew/CrewMemberList'
import NoteDetail from './components/notes/NoteDetails'
import NoteEditForm from './components/notes/NoteEditForm'
import NoteForm from './components/notes/NoteForm'
import NoteList from './components/notes/NoteList'
import SceneDetail from './components/scenes/SceneDetails'
import SceneEditForm from './components/scenes/SceneEditForm'
import SceneForm from './components/scenes/SceneForm'
import SceneList from './components/scenes/SceneList'
import ScenePropDetail from './components/sceneProps/ScenePropDetails'
import ScenePropEditForm from './components/sceneProps/ScenePropEditForm'
import ScenePropForm from './components/sceneProps/ScenePropForm'
import ScenePropList from './components/sceneProps/ScenePropList'
import LocationDetail from './components/locations/LocationDetails'
import LocationEditForm from './components/locations/LocationEditForm'
import LocationForm from './components/locations/LocationForm'
import LocationList from './components/locations/LocationList'

export default class ApplicationViews extends Component {

  // Check if credentials are in local storage
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  state = {
    users: [],
    castMembers: [],
    crewMembers: [],
    notes: [],
    scenes: [],
    sceneProps: [],
    locations: [],
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

  addCastMember = castMember => DataManager.add("castMembers", castMember)
    .then(() => DataManager.getNeededCastMembers("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  deleteCastMember = id => DataManager.delete("castMembers", id)
    .then(() => DataManager.getNeededCastMembers("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  editCastMember = (id, castMembers) => DataManager.edit("castMembers", id, castMembers)
    .then(() => DataManager.getNeededCastMembers("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  addCrewMember = crewMember => DataManager.add("crewMembers", crewMember)
    .then(() => DataManager.getAllAscend("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  deleteCrewMember = id => DataManager.delete("crewMembers", id)
    .then(() => DataManager.getAllAscend("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  editCrewMember = (id, crewMembers) => DataManager.edit("crewMembers", id, crewMembers)
    .then(() => DataManager.getAllAscend("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))


  addNote = note => DataManager.add("notes", note)
    .then(() => DataManager.getAll("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  deleteNote = id => DataManager.delete("notes", id)
    .then(() => DataManager.getAll("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  editNote = (id, notes) => DataManager.edit("notes", id, notes)
    .then(() => DataManager.getAll("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  addScene = scene => DataManager.add("scenes", scene)
    .then(() => DataManager.getNeededScene("scenes"))
    .then(scenes => this.setState({
      scenes: scenes
    }))

  deleteScene = id => DataManager.delete("scenes", id)
    .then(() => DataManager.getNeededScenes("scenes"))
    .then(scenes => this.setState({
      scenes: scenes
    }))

  editScene = (id, scenes) => DataManager.edit("scenes", id, scenes)
    .then(() => DataManager.getNeededScenes("scenes"))
    .then(scenes => this.setState({
      scenes: scenes
    }))

  addSceneProp = sceneProp => DataManager.add("sceneProps", sceneProp)
    .then(() => DataManager.getNeededSceneProps("sceneProps"))
    .then(sceneProps => this.setState({
      sceneProps: sceneProps
    }))

  deleteSceneProp = id => DataManager.delete("sceneProps", id)
    .then(() => DataManager.getNeededSceneProps("sceneProps"))
    .then(sceneProps => this.setState({
      sceneProps: sceneProps
    }))

  editSceneProp = (id, sceneProps) => DataManager.edit("sceneProps", id, sceneProps)
    .then(() => DataManager.getNeededSceneProps("sceneProps"))
    .then(sceneProps => this.setState({
      sceneProps: sceneProps
    }))

  addLocation = location => DataManager.add("locations", location)
    .then(() => DataManager.getNeededLocation("locations"))
    .then(locations => this.setState({
      locations: locations
    }))

  deleteLocation = id => DataManager.delete("locations", id)
    .then(() => DataManager.getNeededLocations("locations"))
    .then(locations => this.setState({
      locations: locations
    }))

  editLocation = (id, locations) => DataManager.edit("locations", id, locations)
    .then(() => DataManager.getNeededLocations("locations"))
    .then(locations => this.setState({
      locations: locations
    }))

  componentDidMount() {

    const newState = {}

    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })
      .then(() => {
        DataManager.getNeededCastMembers("castMembers")
          .then(allCastMembers => {
            newState.castMembers = allCastMembers
          })
          .then(() => {
            DataManager.getNeededCrewMembers("crewMembers")
              .then(allCrewMembers => {
                newState.crewMembers = allCrewMembers
              })
              .then(() => {
                DataManager.getAll("notes")
                  .then(allNotes => {
                    newState.notes = allNotes
                  })
                  .then(() => {
                    DataManager.getAll("scenes")
                      .then(allScenes => {
                        newState.scenes = allScenes
                      })
                      .then(() => {
                        DataManager.getAll("sceneProps")
                          .then(allSceneProps => {
                            newState.sceneprops = allSceneProps
                          })
                          .then(() => {
                            DataManager.getAll("locations")
                              .then(allLocations => {
                                newState.locations = allLocations
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
        <Route exact path="/castMembers" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberList {...props}
              deleteCastMember={this.deleteCastMember}
              editCastMember={this.editCastMember}
              castMembers={this.state.castMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/castMembers/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberForm {...props}
              addCastMember={this.addCastMember} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/castMembers/:castMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberDetail {...props} deleteCastMember={this.deleteCastMember} castMembers={this.state.castMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/castMembers/edit/:castMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberEditForm  {...props} editCastMember={this.editCastMember} castMembers={this.state.castMembers} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        < Route exact path="/crewMembers" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberList {...props}
              deleteCrewMember={this.deleteCrewMember}
              crewMembers={this.state.crewMembers} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />
        < Route exact path="/crewMembers/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberForm {...props}
              addCrewMember={this.addCrewMember} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/crewMembers/:crewMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberDetail {...props} deleteCrewMember={this.deleteCrewMember} CrewMembers={this.state.CrewMembers} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/crewMembers/edit/:crewMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberEditForm  {...props} editCrewMember={this.editCrewMember} CrewMembers={this.state.CrewMembers} />
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
        <Route exact path="/notes/:NoteId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteDetail {...props} deleteNote={this.deleteNote} notes={this.state.notes} />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/scenes" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneList {...props}
              deleteScene={this.deleteScene}
              editScene={this.editScene}
              scenes={this.state.scenes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/scenes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneForm {...props}
              scenes={this.state.scenes}
              addScene={this.addScene} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/scenes/edit/:sceneId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneEditForm  {...props} editScene={this.editScene} scenes={this.state.scenes} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/scenes/:sceneId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneDetail {...props} deleteScene={this.deleteScene} notes={this.state.scenes} />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/sceneProps" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropList {...props}
              deleteSceneProp={this.deleteSceneProp}
              editSceneProp={this.editSceneProp}
              sceneProps={this.state.sceneProps} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/sceneProps/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropForm {...props}
              sceneProps={this.state.sceneProps}
              addSceneProp={this.addSceneProp} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/sceneProps/edit/:scenePropId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropEditForm  {...props} editSceneProp={this.editSceneProp} sceneProps={this.state.sceneProps} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/sceneProps/:ScenePropId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropDetail {...props} deleteSceneProp={this.deleteSceneProp} notes={this.state.sceneProps} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList {...props}
              deleteLocation={this.deleteLocation}
              editLocation={this.editLocation}
              locations={this.state.locations} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/locations/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationForm {...props}
              locations={this.state.locations}
              addLocation={this.addLocation} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/locations/edit/:locationId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationEditForm  {...props} editLocation={this.editLocation} locations={this.state.locations} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/Locations/:LocationId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
          } else {
            return <Redirect to="/" />
          }
        }} />

      </React.Fragment >
    )

  }
}