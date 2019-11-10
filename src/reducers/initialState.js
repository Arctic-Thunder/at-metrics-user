export default {
    user: {
        info: {
            //TODO: REMOVE ME - Hard-code credentials to avoid login during development
            username: "cscimetrics",
            token: "14efc2dfbc44ef2b711e68b24906698939ee49ed"
        },
        loading: false,
        error: null,
    },
    projects: {
        data: [
            {id: "0", name: "Project 1", description: "My first project"},
            {id: "3", name: "Project 2", description: "My second project"},
            {id: "8", name: "Project 3", description: "My third project"},
            {id: "13", name: "Project 4", description: "My fourth project"},
            {id: "55", name: "Project 5", description: "My fifth project"},
            {id: "103", name: "Project 6", description: "My sixth project"},
            {id: "344", name: "Project 7", description: "My seventh project"},
        ],
        loading: false,
        error: null,
    },
    metrics: {
        data: [

        ],
        loading: false,
        error: null,
    },
    currentPage: {
        index: 0
    },
}