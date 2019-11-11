class User {
    constructor() {
        this.name = ""
        this.email = ""
        this.token = ""
    }

    constructor(name, email, token) {
        this.name = name
        this.email = email
        this.token = token
    }

    static compareTo = a => {
        return this.token.compareTo(a.token)
    }

    static equals = a => {
        return this.token === a.token
    }
}

class Project {
    constructor() {
        this.id = -1
        this.name = ""
        this.description = ""
        this.metrics = []
    }

    constructor(id, name, description) {
        this.id = id
        this.name = name
        this.description = description
        this.metrics = []
    }

    compareTo = a => {
        if (this.id < a.id) return -1
        else if (this.id === a.id ) return 0
        else return 1
    }

    equals = a => {
        return this.id === a.id
    }
}

class Metric {
    constructor() {
        this.id = -1
        this.timestamp = Date()
        this.data = {}
    }

    constructor(id, timestamp, data) {
        this.id = id
        this.timestamp = timestamp
        this.data = data
    }

    compareTo = a => {
        if (this.id < a.id) return -1
        else if (this.id === a.id ) return 0
        else return 1
    }

    equals = a => {
        return this.id === a.id
    }
}