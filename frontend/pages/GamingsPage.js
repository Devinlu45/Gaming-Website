import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GamingList from '../components/GamingList';
import { Link } from 'react-router-dom';
import { GiAbdominalArmor } from "react-icons/gi";

function GamingsPage({ setGame }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [gamings, setGamings] = useState([]);

    // RETRIEVE the entire list of gamings
    const loadGamings = async () => {
        const response = await fetch('/gamings');
        const gamings = await response.json();
        setGamings(gamings);
    } 
    

    // UPDATE a single Gaming
    const onEditGaming = async gaming => {
        setGame(gaming);
        redirect("/update");
    }


    // DELETE a single Gaming  
    const onDeleteGaming = async _id => {
        const response = await fetch(`/gamings/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/gamings');
            const gamings = await getResponse.json();
            setGamings(gamings);
        } else {
            console.error(`We weren't able to delete that information. Maybe that information doesn't exist in the backend controller :( = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the gamings
    useEffect(() => {
        loadGamings();
    }, []);

    // DISPLAY the gamings
    return (
        <>
            <h2>List of Games and what I have to say about them</h2>
            <p>This is a list of games that I think are worthy of being played by everyone and it also includes what I think about them.</p>
            <p>Add Game Information with this icon: <Link to="/create"><GiAbdominalArmor /></Link></p>
            <GamingList 
                gamings={gamings} 
                onEdit={onEditGaming} 
                onDelete={onDeleteGaming} 
            />
        </>
    );
}

export default GamingsPage;