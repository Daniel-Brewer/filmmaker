import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
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
import ProjectDetail from './components/projects/ProjectDetails'
import ProjectEditForm from './components/projects/ProjectEditForm'
import ProjectForm from './components/projects/ProjectForm'
import ProjectList from './components/projects/ProjectList'

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
    activeUser: [],
    projects: [],
    currentproject: [],
    isLoaded: false
  }
// functions to be used when called
  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))


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

  // adding castMember and updating state
  addCastMember = castMember => DataManager.add("castMembers", castMember)
    .then(() => DataManager.getCastMembersInProject("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  // deleting castMember and updating state
  deleteCastMember = id => DataManager.delete("castMembers", id)
    .then(() => DataManager.getCastMembersInProject("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  // editing castMember and updating state
  editCastMember = (id, castMembers) => DataManager.edit("castMembers", id, castMembers)
    .then(() => DataManager.getCastMembersInProject("castMembers"))
    .then(castMembers => this.setState({
      castMembers: castMembers
    }))

  addCrewMember = crewMember => DataManager.add("crewMembers", crewMember)
    .then(() => DataManager.getCrewMembersInProject("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  deleteCrewMember = id => DataManager.delete("crewMembers", id)
    .then(() => DataManager.getCrewMembersInProject("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  editCrewMember = (id, crewMembers) => DataManager.edit("crewMembers", id, crewMembers)
    .then(() => DataManager.getCrewMembersInProject("crewMembers"))
    .then(crewMembers => this.setState({
      crewMembers: crewMembers
    }))

  addNote = note => DataManager.add("notes", note)
    .then(() => DataManager.getNotesInProject("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  deleteNote = id => DataManager.delete("notes", id)
    .then(() => DataManager.getNotesInProject("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  editNote = (id, notes) => DataManager.edit("notes", id, notes)
    .then(() => DataManager.getNotesInProject("notes"))
    .then(notes => this.setState({
      notes: notes
    }))

  addProject = project => DataManager.add("projects", project)
    .then(() => DataManager.getUserProjects("projects",this.state.activeUser.id))
    .then(projects => this.setState({
      projects: projects
    }))

  deleteProject = id => DataManager.delete("projects", id)
    .then(() => DataManager.getUserProjects("projects"))
    .then(projects => this.setState({
      projects: projects
    }))

  editProject = (id, projects) => DataManager.edit("projects", id, projects)
    .then(() => DataManager.getUserProjects("projects"))
    .then(projects => this.setState({
      projects: projects
    }))

  addScene = scene => DataManager.add("scenes", scene)
    .then(() => DataManager.getScenesInProject("scenes"))
    .then(scenes => this.setState({
      scenes: scenes
    }))

  deleteScene = id => DataManager.delete("scenes", id)
    .then(() => DataManager.getScenesInProject("scenes"))
    .then(scenes => this.setState({
      scenes: scenes
    }))

  editScene = (id, scenes) => DataManager.edit("scenes", id, scenes)
    .then(() => DataManager.getScenesInProject("scenes"))
    .then(scenes => this.setState({
      scenes: scenes
    }))

  addSceneProp = sceneProp => DataManager.add("sceneProps", sceneProp)
    .then(() => DataManager.getScenePropsInProject("sceneProps"))
    .then(sceneProps => this.setState({
      sceneProps: sceneProps
    }))

  deleteSceneProp = id => DataManager.delete("sceneProps", id)
    .then(() => DataManager.getScenePropsInProject("sceneProps"))
    .then(sceneProps => this.setState({
      sceneProps: sceneProps
    }))

  editSceneProp = (id, sceneProps) => DataManager.edit("sceneProps", id, sceneProps)
    .then(() => DataManager.getScenePropsInProject("sceneProps"))
    .then(sceneProps => this.setState({
      sceneProps: sceneProps
    }))

  addLocation = location => DataManager.add("locations", location)
    .then(() => DataManager.getLocationsInProject("locations"))
    .then(locations => this.setState({
      locations: locations
    }))

  deleteLocation = id => DataManager.delete("locations", id)
    .then(() => DataManager.getLocationsInProject("locations"))
    .then(locations => this.setState({
      locations: locations
    }))

  editLocation = (id, locations) => DataManager.edit("locations", id, locations)
    .then(() => DataManager.getLocationsInProject("locations"))
    .then(locations => this.setState({
      locations: locations
    }))

  componentDidMount() {
// can I set currentProject at the same time I set activeUser?
// isAuthenticated = () => localStorage.getItem("credentials") !== null
    const newState = {}
    let localUser = JSON.parse(localStorage.getItem("credentials"));
    newState.activeUser = localUser;
    DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
      })

      // dataManager call functions
      .then(() => {
        DataManager.getCastMembersInProject("castMembers")
          .then(allCastMembers => {
            newState.castMembers = allCastMembers
          })
          .then(() => {
            DataManager.getCrewMembersInProject("crewMembers")
              .then(allCrewMembers => {
                newState.crewMembers = allCrewMembers
              })
              .then(() => {
                DataManager.getNotesInProject("notes")
                  .then(allNotes => {
                    newState.notes = allNotes
                  })
                  .then(() => {
                    DataManager.getScenesInProject("scenes")
                      .then(allScenes => {
                        newState.scenes = allScenes
                      })
                      .then(() => {
                        DataManager.getScenePropsInProject("sceneProps")
                          .then(allSceneProps => {
                            newState.sceneProps = allSceneProps
                          })
                          .then(() => {
                            DataManager.getLocationsInProject("locations")
                              .then(allLocations => {
                                newState.locations = allLocations
                              })
                              .then(() => {
                                // DataManager.getAll("projects")
                                DataManager.getUserProjects("projects",JSON.parse(localStorage.getItem("credentials")).id)
                                  .then(allProjects => {
                                    newState.projects = allProjects
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
      })
  }

  render() {
    return (
      <React.Fragment>
       {/* default to login */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" render={(props) => {
          return <Register {...props}
            addUser={this.addUser}
            users={this.state.users} />
        }} />
        
        {/* Route paths defined */}
        <Route exact path="/castMembers" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberList {...props}
              deleteCastMember={this.deleteCastMember}
              editCastMember={this.editCastMember}
              castMembers={this.state.castMembers}
              activeUser={this.state.activeUser}
              projects={this.state.projects}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/castMembers/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberForm {...props}
              addCastMember={this.addCastMember}
              activeUser={this.state.activeUser}
              projects={this.state.projects}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/castMembers/edit/:castMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CastMemberEditForm  {...props}
              editCastMember={this.editCastMember}
              castMembers={this.state.castMembers}
              activeUser={this.state.activeUser}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        < Route exact path="/crewMembers" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberList {...props}
              deleteCrewMember={this.deleteCrewMember}
              crewMembers={this.state.crewMembers}
              activeUser={this.state.activeUser} />
          } else {
            return <Redirect to="/" />
          }
        }
        } />
        < Route exact path="/crewMembers/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberForm {...props}
              addCrewMember={this.addCrewMember}
              activeUser={this.state.activeUser}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/crewMembers/:crewMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberDetail {...props}
              deleteCrewMember={this.deleteCrewMember}
              crewMembers={this.state.crewMembers}
              activeUser={this.state.activeUser}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />
        < Route exact path="/crewMembers/edit/:crewMemberId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <CrewMemberEditForm  {...props}
              editCrewMember={this.editCrewMember}
              crewMembers={this.state.crewMembers}
              activeUser={this.state.activeUser}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/notes" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteList {...props}
              users={this.state.users}
              editNote={this.editNote}
              activeUser={this.state.activeUser}
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
              activeUser={this.state.activeUser}
              addNote={this.addNote} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/notes/edit/:noteId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteEditForm  {...props}
              editNote={this.editNote}
              activeUser={this.state.activeUser}
              notes={this.state.notes} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/notes/:NoteId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <NoteDetail {...props}
              deleteNote={this.deleteNote}
              activeUser={this.state.activeUser}
              notes={this.state.notes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/projects" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProjectList {...props}
              deleteProject={this.deleteProject}
              editProject={this.editProject}
              projects={this.state.projects}
              activeUser={this.state.activeUser}
              castMembers={this.state.castMembers}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/projects/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProjectForm {...props}
              addProject={this.addProject}
              activeUser={this.state.activeUser}
              projects={this.state.projects}
              castMembers={this.state.castMembers}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/projects/:projectId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProjectDetail {...props} deleteProject={this.deleteProject}
              projects={this.state.projects}
              activeUser={this.state.activeUser}
              castMembers={this.state.castMembers}
            />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/projects/edit/:projectId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ProjectEditForm  {...props}
              editProject={this.editProject}
              projects={this.state.projects}
              activeUser={this.state.activeUser}
            />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/scenes" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneList {...props}
              deleteScene={this.deleteScene}
              editScene={this.editScene}
              activeUser={this.state.activeUser}
              scenes={this.state.scenes} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/scenes/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneForm {...props}
              scenes={this.state.scenes}
              activeUser={this.state.activeUser}
              addScene={this.addScene} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/scenes/edit/:sceneId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneEditForm  {...props}
              editScene={this.editScene}
              activeUser={this.state.activeUser}
              scenes={this.state.scenes} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/scenes/:sceneId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <SceneDetail {...props}
              deleteScene={this.deleteScene}
              activeUser={this.state.activeUser}
              scenes={this.state.scenes} />
          } else {
            return <Redirect to="/" />
          }
        }} />

        <Route exact path="/sceneProps" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropList {...props}
              deleteSceneProp={this.deleteSceneProp}
              editSceneProp={this.editSceneProp}
              activeUser={this.state.activeUser}
              sceneProps={this.state.sceneProps} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/sceneProps/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropForm {...props}
              sceneProps={this.state.sceneProps}
              activeUser={this.state.activeUser}
              addSceneProp={this.addSceneProp} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/sceneProps/edit/:scenePropId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropEditForm  {...props}
              editSceneProp={this.editSceneProp}
              activeUser={this.state.activeUser}
              sceneProps={this.state.sceneProps} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/sceneProps/:scenePropId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <ScenePropDetail {...props}
              deleteSceneProp={this.deleteSceneProp}
              activeUser={this.state.activeUser}
              sceneProps={this.state.sceneProps} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList {...props}
              deleteLocation={this.deleteLocation}
              editLocation={this.editLocation}
              activeUser={this.state.activeUser}
              locations={this.state.locations} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/locations/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationForm {...props}
              locations={this.state.locations}
              activeUser={this.state.activeUser}
              addLocation={this.addLocation} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/locations/edit/:locationId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationEditForm  {...props}
              editLocation={this.editLocation}
              activeUser={this.state.activeUser}
              locations={this.state.locations} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/Locations/:LocationId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationDetail {...props}
              deleteLocation={this.deleteLocation}
              activeUser={this.state.activeUser}
              locations={this.state.locations} />
          } else {
            return <Redirect to="/" />
          }
        }} />

      </React.Fragment >
    )

  }
}
