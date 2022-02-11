
export const ADD_NOTES = "ADD_NOTES";
export const REMOVE_NOTES = "REMOVE_NOTES";
export const ADD_ALL_API = "ADD_ALL_API";
export const SET_DONE = "SET_DONE";
export const EDIT_NOTES = "EDIT_NOTES";

export const AddNoteAction = (payload) => ({ type: ADD_NOTES, payload });
export const RemoveNotesAction = (payload) => ({ type: REMOVE_NOTES, payload });
export const SetDoneAction = (payload) => ({ type: SET_DONE, payload });
export const EditNotesAction = (payload) => ({type: EDIT_NOTES, payload})

export const AddApiAction = (payload) => ({ type: ADD_ALL_API, payload });
