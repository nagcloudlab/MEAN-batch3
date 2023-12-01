const { MongoClient, ReadPreference } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:40001,localhost:40002,localhost:40003/test";

const client = new MongoClient(uri, {
    readPreference: ReadPreference.SECONDARY_PREFERRED
});

async function run() {
    try {
        // Get the database and collection on which to run the operation
        const database = client.db("test");
        const todos = database.collection("todos");
        // Execute query 
        const cursor = todos.find({});
        // Print a message if no documents were found
        if ((await todos.countDocuments()) === 0) {
            console.log("No documents found!");
        }
        // Print returned documents
        for await (const doc of cursor) {
            console.dir(doc.title);
        }
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
