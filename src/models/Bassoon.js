const url = `${process.env.REACT_APP_URL}/bassoon`;

class BassoonModel {
    static findAnswers = (bottom, top) => {
        return fetch(`${url}/${bottom}/${top}`)
            .then((response) => response.json())
    }
}

export default BassoonModel;