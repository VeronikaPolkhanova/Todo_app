import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AddNoteAction, RemoveNotesAction, SetDoneAction, EditNotesAction, RemoveAllDoneAction, MakeAllDoneAction } from '../store/actions';
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
    const RemoveAllDone = () => {
        dispatch(RemoveAllDoneAction());
    }
    const MakeAllDone = () => {
        dispatch(MakeAllDoneAction());
    }
    const [value, setValue] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(AddNoteAction(value));
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const notes = useSelector(state => state.notes)
    useEffect(() => {
        dispatch(fetchNotes());
    }, [])

    const [wight, setWight] = useState(document.documentElement.clientWidth);
    const [pagination, setPagination] = useState({
        page: 0,
        notesOnPage: wight < 459 ? 80 : 10,
        // pagesVisited: this.page * this.notesOnPage,
    });

    const changePage = ({ selected }) => {
        setPagination({ ...pagination, page: selected });
    }

    window.onresize = function (event) {
        setWight(event.target.outerWidth);
        if (wight <= 725 & wight >= 460) setPagination({ ...pagination, notesOnPage: 50 })
        else if (wight <= 459) setPagination({ ...pagination, notesOnPage: 80 })
        else if (wight > 725) setPagination({ ...pagination, notesOnPage: 10 });
    };

    return (
        <div className="page-todo">
            <div className="make-container">
                <span className="make-btn" onClick={MakeAllDone}>Make all done</span>
                <span className="make-btn" onClick={RemoveAllDone}>Delete all done</span>
            </div>

            <ul>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Add todos"
                    />
                    <input type="submit" value="Add" />
                </form>

                {
                    (() => {
                        if (notes.length === 0) return <p className="empty-msg">Todo list is empty</p>
                        else return (
                            notes.slice((pagination.page * pagination.notesOnPage), ((pagination.page * pagination.notesOnPage) + pagination.notesOnPage)).map(({ id, title, completed }) =>
                                <TodoItem
                                    id={id}
                                    key={id}
                                    title={title}
                                    completed={completed}
                                    RemoveNotes={RemoveNotes}
                                    SetDone={SetDone}
                                    EditNotes={EditNotes}
                                />)
                        )
                    }
                    )()
                }
            </ul>
            {
                (() => {
                    if (notes.length === 0) return
                    else return <ReactPaginate
                        previousLabel={"Previos"}
                        nextLabel={"Next"}
                        pageCount={Math.ceil(notes.length / pagination.notesOnPage)}
                        onPageChange={changePage}
                        containerClassName="paginationBtns"
                        activeClassName="paginationActive"
                    />
                }
                )()
            }
        </div>
    )
}