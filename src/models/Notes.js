const url = 'https://bassoon-finger-trainer-api.herokuapp.com/notes';

class NoteModel {
    static getAllNotes = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default NoteModel;