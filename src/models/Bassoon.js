const url = 'https://bassoon-finger-trainer-api.herokuapp.com/api/v1/bassoon';

class BassoonModel {
    static findAnswers = (bottom, top) => {
        return fetch(`${url}/${bottom}/${top}`)
            .then((response) => response.json())
    }
}

export default BassoonModel;