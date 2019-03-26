// #!/usr/bin/env node
//import 'idempotent-babel-polyfill'
// import "babel-polyfill";
import { MongoClient, ObjectID} from 'mongodb';
import * as index from './methods/index.js'

class mongoORM{
  constructor(config){
      // this.host = config.host
      // this.port = config.port
      this.dbName = config.database
      this.MongoClient = MongoClient
      this.ObjectID = ObjectID
      this.url = `mongodb://${config.host}:${config.port}/`
  }

	addOne = index.addOne
	deleteOne = index.deleteOne
	getAll  = index.getAll
	getOne = index.getOne
	updateOne = index.updateOne
	updateArrayInOne = index.updateArrayInOne
  create = index.create
  insertArrayInOne = index.insertArrayInOne

}

export default mongoORM;
