const url = 'https://bassoon-finger-trainer-api.herokuapp.com/api/v1/fingerings';

class FingeringModel {
    static getByName = (name) => {
        return fetch(`${url}/name/${name}`)
            .then((response) => response.json())
    }

    static getRandom = () => {
        return fetch(`${url}/random`)
            .then((response) => response.json())
    }
}

export default FingeringModel;