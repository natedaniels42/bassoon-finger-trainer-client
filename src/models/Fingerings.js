const url = `${process.env.REACT_APP_URL}/fingerings`;

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