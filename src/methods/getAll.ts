const getAll = async function(collection){
		const client = await this.MongoClient.connect(this.url,{useNewUrlParser: true });

		const db = await client.db(this.dbName);
		const documents = await db.collection(collection).find().toArray();

		documents.forEach(doc => {
				doc.dateCreated = doc._id.getTimestamp().toDateString();
				doc.timeCreated = doc._id.getTimestamp().toTimeString();
		});

		client.close();
		return documents;
}

export default getAll
