const url = 'http://localhost:4000/api/v1/notes';

class NoteModel {
    static getAllNotes = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default NoteModel;