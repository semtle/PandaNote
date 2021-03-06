import * as APIUTIL from '../util/notebook_api_util';
import { fetchNotes } from './notes_actions';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK  = "RECEIVE_NOTEBOOK";
export const MAKE_NOTEBOOK     = "MAKE_NOTEBOOK";
export const DELETE_NOTEBOOK   = "DELETE_NOTEBOOK";
export const CURRENT_NOTEBOOK  = "CURRENT_NOTEBOOK";


export const fetchNotebooks = () => dispatch => (
  APIUTIL.fetchNotebooks()
    .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchNotebook = id => dispatch => (
  APIUTIL.fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
);

export const createNotebook = notebook => dispatch => (
  APIUTIL.createNotebook(notebook)
    .then(newNotebook => dispatch(makeNotebook(newNotebook)))
);

export const deleteNotebook = notebook => dispatch => (
  APIUTIL.deleteNotebook(notebook.id)
    .then(newNotebook => dispatch(removeNotebook(newNotebook)))
    .then(() => dispatch(fetchNotes()))
);

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const makeNotebook = notebook => ({
  type: MAKE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: DELETE_NOTEBOOK,
  notebook
});

export const setCurrentNotebook = notebook => ({
  type: CURRENT_NOTEBOOK,
  notebook
});
