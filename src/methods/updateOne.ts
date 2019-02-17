const updateOne = async function(collection, id, data){
		const client = await this.MongoClient.connect(this.url,{useNewUrlParser: true });
		const db = await client.db(this.dbName);

				console.log('id in mongo BETTER', id);

				let o_id = new this.ObjectID(id)

				console.log('o_id', o_id);

		const documentUpdated = await db.collection(collection).updateOne({ '_id':  o_id }, { $set: data });

		if (documentUpdated) {
				client.close();
				return true;
		}
}

export default updateOne;
