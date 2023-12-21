// Models for the gaming Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'status(500): Sorry but you were not able to connect successfully to the server.' });
    } else  {
        console.log('Yay! You were able to connect successfully to the server with Mongoose!');
    }
});

// SCHEMA: Define the collection's schema.
const gamingSchema = mongoose.Schema({
	title:    { type: String, required: true },
	trophies:     { type: String, required: true, min: [0, "You did't receive any trophies for this game"] },
    rating: {type: Number, required: true, min: [0, "You didn't like this game at all"]},
	date: { type: Date, required: true, min: '2016-01-01', default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "gamings".
const gamings = mongoose.model('gamings', gamingSchema);


// CREATE model *****************************************
const createGaming = async (title, trophies, rating, date) => {
    const gaming = new gamings({ 
        title: title, 
        trophies: trophies,
        rating: rating, 
        date: date 
    });
    return gaming.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveGamings = async () => {
    const query = gamings.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGamingById = async (_id) => {
    const query = gamings.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGamingById = async (_id) => {
    const result = await gamings.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGaming = async (_id, title, trophies, rating, date) => {
    const result = await gamings.replaceOne({_id: _id }, {
        title: title,
        trophies: trophies,
        rating: rating,
        date: date
    });
    return { 
        _id: _id, 
        title: title,
        trophies: trophies,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createGaming, retrieveGamings, retrieveGamingById, updateGaming, deleteGamingById }