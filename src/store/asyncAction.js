import {AddApiAction} from './actions';

const fetchNotes = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(AddApiAction(json)))
    }
}
export default fetchNotes;