const url = 'https://swapi.co/api/';

export function getAllStarships(){
    return fetch(`${url}starships`, {mode: 'cors'}).then(res => res.json());
}