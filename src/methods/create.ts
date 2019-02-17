const create = async function(){

console.log('hit this mongo create file')

const client = await this.MongoClient.connect(this.url, {useNewUrlParser: true });
const db = await client.db(this.dbName);

let created = await db.createCollection(this.dbName);


}


export default create;
