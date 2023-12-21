import React from 'react';
import Gaming from './gamings';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function GamingList({ gamings, onDelete, onEdit }) {
    return (
        <table id="gamings">
            <caption>Add more game information or edit existing game information</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Trophies Received</th>
                    <th>Rating</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {gamings.map((gaming, i) => 
                    <Gaming 
                        gaming={gaming} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default GamingList;
