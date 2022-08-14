import mongoose from 'mongoose'

class Database {
    constructor() {
        this.mongo();
    }
    mongo() {
        this.mongoConnection = mongoose.connect(
            "mongodb://localhost:27017/cerveja", 
            {
                useNewUrlParser: true,
                useFindAndModify: true
            }
        );
    }
}

export default new Database();