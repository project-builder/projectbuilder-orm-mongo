const deleteOne = async function(collection, id){
				const client = await this.MongoClient.connect(this.url,{useNewUrlParser: true });
				const db = await client.db(this.dbName);
				const documentDeleted = await db.collection(collection).deleteOne({ '_id': this.ObjectID(id) });

		if (documentDeleted) {
				client.close();
				return true;
		}

}

export default deleteOne;
