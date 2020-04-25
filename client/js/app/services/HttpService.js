export class HttpService {
    get(url) {
        return fetch(url, {
            method: 'GET',
        })
        .then(res => res.json())
    }

    post (url, data) {
        return fetch (url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
    }
}