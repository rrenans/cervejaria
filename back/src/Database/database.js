/*

mongo

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
*/

import sequelize from 'sequelize'
import CervejaModel from './CervejaModel'
import ProducaoModel from './ProducaoModel'

class Database {
    constructor() {
        this.postgres()
    }
    postgres(){
        // this.connection = new sequelize({"dialect":"mysql", "":"dbcervejaria","host":"localhost", "username":"host", "password":"familia200402"})
        this.connection = new sequelize("cervejaria", "postgres", "familia200402", {"host": "localhost", "dialect": "postgres"})
        //iniciando modelo
        // console.log(this.connection)
        CervejaModel.init(this.connection)
        ProducaoModel.init(this.connection)
        ProducaoModel.associate(this.connection.models)
        // CervejaModel.associate(this.connection.models)

    }
}

export default new Database();