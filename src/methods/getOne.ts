const getOne = async function(collection, id){
		const client = await this.MongoClient.connect(this.url,{useNewUrlParser: true });
		const db = await client.db(this.dbName);
		let o_id = new this.ObjectID(id)

		console.log('oid', o_id);

		const documents = await db.collection(collection).findOne({_id: o_id});

		if(documents){
			documents.dateCreated = documents._id.getTimestamp().toDateString();
			documents.timeCreated = documents._id.getTimestamp().toTimeString();
		}
	

		client.close();
		return documents;
}

export default getOne
