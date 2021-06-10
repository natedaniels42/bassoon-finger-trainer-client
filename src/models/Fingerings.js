const url = 'http://localhost:4000/api/v1/fingerings';

class FingeringModel {
    static getByName = (name) => {
        return fetch(`${url}/name/${name}`)
            .then((response) => response.json())
    }
}

export default FingeringModel;