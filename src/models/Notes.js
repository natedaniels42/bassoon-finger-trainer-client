const url = `${process.env.REACT_APP_URL}/notes`;

class NoteModel {
    static getAllNotes = () => {
        return fetch(url)
            .then((response) => response.json())
    }
}

export default NoteModel;