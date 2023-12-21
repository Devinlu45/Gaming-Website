import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiAbdominalArmor } from "react-icons/gi";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddGamingPageForm = () => {

    const [title, setTitle]       = useState('');
    const [trophies, setTrophies]         = useState('');
    const [rating, setRating] = useState('');
    const [date, setDating] = useState('');
    
    const redirect = useNavigate();

    const addGaming = async () => {
        const newGaming = { title, trophies, rating, date };
        const response = await fetch('/gamings', {
            method: 'post',
            body: JSON.stringify(newGaming),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Yay, you were able to create the new gaming data information for the table.`);
            redirect("/GamingsPage");
        } else {
            alert(`Something went wrong, and we aren't able to establish the connection with the mongodb cluster. Perhaps, you have a problem with the const adding your information. Like say you have 4 pieces of information to store, but you're const is only set up to hold 3 pieces of information. Maybe you didn't connect to the backend controller correctly? = ${response.status}`);
            redirect("/GamingsPage");
        }
    };


    return (
        <>
        <article>
            <h2><GiAbdominalArmor />Add a Game</h2>
            <p>This is where we would add what we want to say about our game.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which Game are you adding?</legend>
                    <label for="title">Game title</label>
                    <input
                        type="text"
                        placeholder="Title of the game"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="trophies">Trophies released</label>
                    <input
                        type="number"
                        value={trophies}
                        placeholder="# of trophies you received for this game"
                        onChange={e => setTrophies(e.target.value)} 
                        id="trophies" />

                    <label for="rating">Rating</label>
                    <input
                        type="text"
                        placeholder="Primary rating of the game"
                        value={rating}
                        onChange={e => setRating(e.target.value)} 
                        id="rating" />


                    <label for="date">date (Please enter in yy/mm/dd format)</label>
                    <input
                        type="text"
                        placeholder="Date you entered this info"
                        value={date}
                        onChange={e => setDating(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addGaming}
                        id="submit"
                    ><GiAbdominalArmor />Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddGamingPageForm;