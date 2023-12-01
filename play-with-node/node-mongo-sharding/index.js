const { MongoClient, ReadPreference } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
    readPreference: ReadPreference.SECONDARY_PREFERRED
});

async function run() {
    try {
        // Get the database and collection on which to run the operation
        const database = client.db("populations");
        const cities = database.collection("cities");
        // Execute query 
        const cursor = cities.find({});
        // Print a message if no documents were found
        if ((await cities.countDocuments()) === 0) {
            console.log("No documents found!");
        }
        // Print returned documents
        for await (const doc of cursor) {
            console.log(doc.name, doc.country);
        }
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
