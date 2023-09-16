
export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const updateNote = (editedNote) => ({
  type: "UPDATE_NOTE",
  payload: editedNote,
});

export const deleteNote = (noteId) => ({
  type: "DELETE_NOTE",
  payload: noteId,
});