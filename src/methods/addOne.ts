const addOne = async function(collection, data){
		const client = await this.MongoClient.connect(this.url, {useNewUrlParser: true });
		const db = await client.db(this.dbName);
		const documentInserted = await db.collection(collection).insertOne(data);

		if (documentInserted) {
				client.close();
				return documentInserted.insertedId;
		}
}

export default addOne;
