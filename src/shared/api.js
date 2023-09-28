const BACKEND_HOST = 'https://tap-web-1.herokuapp.com/';

export const loadTopics = (searchBy) => {
    let params = new URLSearchParams();
    if (searchBy) {
        params.set('phrase', searchBy);
    }

    return fetch(`${BACKEND_HOST}topics/list?` + params)
    .then(res => res.json());
}