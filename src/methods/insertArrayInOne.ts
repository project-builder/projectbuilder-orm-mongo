

const insertArrayInOne = async function(collection, id, data){
		let key = Object.keys(data);
		let value = Object.values(data)[0];
		let toUpdate = {};
		toUpdate[key] = {$each: value};

		const client = await this.MongoClient.connect(this.url,{useNewUrlParser: true });
		const db = await client.db(this.dbName);
		const documentUpdated = await db.collection(collection).updateOne({ '_id': this.ObjectID(id)},{$push:toUpdate});

		if (documentUpdated) {
				client.close();
				return true;
		}
}

export default insertArrayInOne
