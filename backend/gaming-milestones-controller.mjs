// Controllers for the gaming Collection

import 'dotenv/config';
import express from 'express';
import * as gamings from './gaming-milestones-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/gamings', (req,res) => { 
    gamings.createGaming(
        req.body.title, 
        req.body.trophies, 
        req.body.rating,
        req.body.date
        )
        .then(gaming => {
            console.log(`"${gaming.title}" was put into the collection!`);
            res.status(201).json(gaming);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'status(400): Sorry something went wrong with your request to add to your collection. Are server is not able to process your request :( .' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/gamings', (req, res) => {
    gamings.retrieveGamings()
        .then(gamings => { 
            if (gamings !== null) {
                console.log(`Everything you wanted from gamings was retrieved from the collection successfully!`);
                res.json(gamings);
            } else {
                res.status(404).json({ Error: 'status(404): Sorry about that, we are not able to find the collection that you specified :( . So we can not give you everything you wanted from gamings.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'status(400): Something went wrong with your request to get the information you want from the collection you specified. Are server is not able to process this request :(. ' });
        });
});


// RETRIEVE by ID controller
app.get('/gamings/:_id', (req, res) => {
    gamings.retrieveGamingById(req.params._id)
    .then(gaming => { 
        if (gaming !== null) {
            console.log(`"${gaming.title}" was obtained, this was thanks to the ID that you gave. `);
            res.json(gaming);
        } else {
            res.status(404).json({ Error: 'status(404): Sorry, we are not able to find the collection that you specified with the ID that you gave. So we can not give you the title.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'status(400): Something went wrong with your request to find the title in the collection that you specified with your given ID. Please try your request again!' });
    });

});


// UPDATE controller ************************************
app.put('/gamings/:_id', (req, res) => {
    gamings.updateGaming(
        req.params._id, 
        req.body.title, 
        req.body.trophies, 
        req.body.rating,
        req.body.date,
    )
    .then(gaming => {
        console.log(`"${gaming.title}" was updated successfully :D !`);
        res.json(gaming);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'status(400): Sorry, we can not update the title of the collection that you want updated. Your request was corrupted :(. Maybe something went wrong with Mongoose?' });
    });
});


// DELETE Controller ******************************
app.delete('/gamings/:_id', (req, res) => {
    gamings.deleteGamingById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`${deletedCount} gaming was deleted, this was thanks to the ID that you gave.`);
                res.status(200).send({ Success: 'status(200): LETS GOOOO. You were able to delete the collection that you wanted to be deleted!!!' });
            } else {
                res.status(404).json({ Error: 'status(404): Sorry we are not able to delete the collection that you want because we could not find it :( .' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Sorry, something just went wrong. No error message is available.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});