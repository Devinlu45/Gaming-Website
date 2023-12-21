import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { GiBarbedArrow } from "react-icons/gi";

export const EditGamingPageForm = ({ gamingToEdit }) => {
 
    const [title, setTitle]       = useState(gamingToEdit.title);
    const [trophies, setTrophies]         = useState(gamingToEdit.trophies);
    const [rating, setRating] = useState(gamingToEdit.rating);
    const [date, setDate] = useState(gamingToEdit.date.slice(0,10));
    
    const redirect = useNavigate();

    const editGaming = async () => {
        const response = await fetch(`/gamings/${gamingToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                trophies: trophies, 
                rating: rating,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Great, we were able to edit that information.`);
        } else {
            const errMessage = await response.json();
            alert(`We weren't able to edit that information. I think you weren't able to connect with the backend controller successfully. Maybe there is also something wrong with your fetch const.${response.status}. ${errMessage.Error}`);
        }
        redirect("/GamingsPage");
    }

    return (
        <>
        <article>
            <h2><GiBarbedArrow />Edit a Game</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend><GiBarbedArrow />Which Game are you adding?</legend>
                    <label for="title">Game title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="trophies">trophies obtained</label>
                    <input
                        type="number"
                        value={trophies}
                        onChange={e => setTrophies(e.target.value)} 
                        id="trophies" />

                    <label for="rating">Rating</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={e => setRating(e.target.value)} 
                        id="rating" />

                    <label for="date">date: (Please enter in yy/mm/dd format)</label>
                    <input
                        type="text"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editGaming}
                        id="submit"
                    ><GiBarbedArrow />Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditGamingPageForm;