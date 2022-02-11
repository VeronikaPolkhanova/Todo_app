import React from 'react';
import './style.css';

import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineDownloadDone, MdOutlineModeEditOutline } from 'react-icons/md';

export default function TodoItem({ id, completed, title, RemoveNotes, SetDone, EditNotes }) {

    return (
        <li className="todo-item">
            <span className="status" style={{ backgroundColor: `${completed === true ? "green" : "rgb(62, 23, 134)"}` }} />
            <p className="title" onClick={() => SetDone(id)} style={{ textDecoration: `${completed === true ? "line-through" : "none"}` }}>{title}</p>
            <p className="completed">{
                completed === true ? <MdOutlineDownloadDone className="done" /> : ""
            }</p>
            <MdOutlineModeEditOutline className="edit" onClick={()=> EditNotes(id, title)}/>
            <AiOutlineDelete className="delete" onClick={() => RemoveNotes(id)} />
        </li>)

}