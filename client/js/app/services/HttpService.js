export class HttpService {
    get(url) {
        return fetch(url)
        .then(res => res.json())
    }

    post (url, data) {
        fetch (url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }
}