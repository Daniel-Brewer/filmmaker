//from Former Nutshell project Data Managers. this uses Grunt / Browserify
//only one data manager is needed - DRY by passing in props

const remoteURL = "http://localhost:8088"

export default Object.create(null, {
    get: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`)
            .then(result => result.json())
        }
    },
// might be able to reduce these to one "getItemsInProject"
    
    getCastMembersInProject: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}/?user=${id}`)
            .then(result => result.json())
        }

    },
    getCrewMembersInProject: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}/?user=${id}`)
            .then(result => result.json())
        }

    },
    getNotesInProject: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}?user=${id}`)
            .then(result => result.json())
        }

    },
    // need to add in an ID here
    getUserProjects: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}/?user=${id}`)
            .then(result => result.json())
        }

    },
    getScenesInProject: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}?user=${id}`)
            .then(result => result.json())
        }

    },
    getScenePropsInProject: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}?user=${id}`)
            .then(result => result.json())
        }

    },
    getLocationsInProject: {
        value: (resource,id) => {
            return fetch(`${remoteURL}/${resource}?user=${id}`)
            .then(result => result.json())
        }

    },

    getAll: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}`)
            .then(result => result.json())
        }
    },
    delete: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },
    add: {
        value: (resource, item) => {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    },
    edit: {
        value: (resource, id, item) => {
            console.log(item, "item")
            console.log(`${remoteURL}/${resource}/${id}`)
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    }
})