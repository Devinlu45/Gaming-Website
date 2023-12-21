import React from 'react';
import { GiAbstract047 } from "react-icons/gi";
import { GiBassoon } from "react-icons/gi";
// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Gaming({ gaming, onEdit, onDelete }) {
    return (
        <tr>
            <td>{gaming.title}</td>
            <td>{gaming.trophies}</td>
            <td>{gaming.rating}</td>
            <td>{gaming.date}</td>

            {/* Update these icons to something that matches your style. */}
            <td><GiAbstract047 onClick={() => onDelete(gaming._id)} /></td>
            <td><GiBassoon onClick={() => onEdit(gaming)} /></td>
        </tr>
    );
}

export default Gaming;