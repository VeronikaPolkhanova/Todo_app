import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AddNoteAction, RemoveNotesAction, SetDoneAction, EditNotesAction } from '../store/actions';
import fetchNotes from '../store/asyncAction';

import TodoItem from '../components/todo';
import ReactPaginate from 'react-paginate';

export default function TodoList() {
    const dispatch = useDispatch();

    const RemoveNotes = (payload) => {
        dispatch(RemoveNotesAction(payload));
    }
    const SetDone = (payload) => {
        dispatch(SetDoneAction(payload));
    }
    const EditNotes = (id, title) => {
        let edit = prompt('Edit', title);
        dispatch(EditNotesAction({ id, edit }));
    }

    const notes = useSelector(state => state.notes)
    useEffect(() => {
        dispatch(fetchNotes());
    }, [])

    const [page, setPage] = useState(0);
    const notesOnPage = 10;
    const pagesVisited = page * notesOnPage;
    const changePage = ({ selected }) => {
        setPage(selected);
    }
    const [value, setValue] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(AddNoteAction(value));
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div>
            <ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Add todos"
                />
                <input type="submit" value="Add"/>
            </form>

                {
                    notes.slice(pagesVisited, pagesVisited + notesOnPage).map(({ id, title, completed }) =>
                        <TodoItem
                            id={id}
                            key={id}
                            title={title}
                            completed={completed}
                            RemoveNotes={RemoveNotes}
                            SetDone={SetDone}
                            EditNotes={EditNotes}
                        />)
                }
            </ul>
            <ReactPaginate
                previousLabel={"Previos"}
                nextLabel={"Next"}
                pageCount={Math.ceil(notes.length / notesOnPage)}
                onPageChange={changePage}
                containerClassName="paginationBtns"
                activeClassName="paginationActive"
            />
        </div>
    )
}