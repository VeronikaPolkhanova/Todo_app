import { ADD_NOTES, REMOVE_NOTES, ADD_ALL_API, SET_DONE, EDIT_NOTES } from './actions';


const defaultState = {
    notes: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NOTES:
            if (action.payload === undefined || action.payload === null || action.payload === "") return state

            else return {
                ...state, notes: [
                    {
                        id: state.notes.length + 1,
                        UserId: 1,
                        title: action.payload,
                        completed: false,
                    }, ...state.notes]
            }
            
        case REMOVE_NOTES:
            return { ...state, notes: state.notes.filter(it => it.id !== action.payload) }

        case EDIT_NOTES:
            return {
                ...state, notes: state.notes.map(it => {
                    if (action.payload.edit === undefined || action.payload.edit === null || action.payload.edit === "") {
                        return { ...it }
                    } else {
                        if (it.id === action.payload.id) {
                            return { ...it, title: action.payload.edit }
                        }
                        else return { ...it }
                    }
                })
            }

        case SET_DONE:
            return {
                notes: state.notes.map(it => {
                    if (it.id === action.payload) return { ...it, completed: !it.completed }
                    else return { ...it }
                })
            }

        case ADD_ALL_API:
            return { ...state, notes: [...action.payload] }

        default:
            return state
    }
}
export default reducer;
